//..src/components/Buttons/UploadReceipt.tsx
import React, { useState } from 'react';
import { uploadFile, setDoc  } from '@junobuild/core-peer';
import { Button, Typography, Paper, Box, CircularProgress } from '@mui/material';
import {nanoid} from "nanoid";
interface ILineItem {
    description: string;
    totalAmount: number;
}
interface IOcrResult {
    documentId: string;
    filename: string;
    supplierName: string;
    supplierAddress: string;
    totalAmount: number;
    purchaseDate: string;
    purchaseTime: string;
    summary: string;
    documentType?: string;
    lineItems?: ILineItem[];
    locale: {
        language: string;
        country: string | null;
        currency: string;
    };
    subcategory: string;
}
interface IMindeeResponse {
    documentType?: { value: string };
    date?: { value: string };
    time?: { value: string };
    supplierName?: { value: string };
    supplierAddress?: { value: string };
    totalAmount?: { value: number };
    lineItems?: ILineItem[];
    locale?: {
        language: { value: string };
        country: { value: string | null };
        currency: { value: string };
    };
    subcategory?: { value: string };
}
//TODO: display currency like $, €, £, etc. with correct symbol and numbers after . (dot) like 0.00
//TODO: repost amount to transaction page and calculate total amount
const FileUploadAndRecognize = () => {
    const [file, setFile] = useState<File | null>(null);
    const [filePreviewUrl, setFilePreviewUrl] = useState<string | null>(null);
    const [ocrResult, setOcrResult] = useState<IOcrResult | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const selectedFile = event.target.files[0];
            setFile(selectedFile);
            const previewUrl = URL.createObjectURL(selectedFile);
            setFilePreviewUrl(previewUrl);
            console.log("File preview URL:", previewUrl);
        }
    };
    const prepareDataForDatastore = (ocrResult: IOcrResult): IMindeeResponse => {
        return {
            documentType: ocrResult.documentType ? { value: ocrResult.documentType } : undefined,
            date: ocrResult.purchaseDate ? { value: ocrResult.purchaseDate } : undefined,
            time: ocrResult.purchaseTime ? { value: ocrResult.purchaseTime } : undefined,
            supplierName: ocrResult.supplierName ? { value: ocrResult.supplierName } : undefined,
            supplierAddress: ocrResult.supplierAddress ? { value: ocrResult.supplierAddress } : undefined,
            totalAmount: ocrResult.totalAmount ? { value: ocrResult.totalAmount } : undefined,
            lineItems: ocrResult.lineItems ? ocrResult.lineItems.map(item => ({
                description: item.description,
                totalAmount: item.totalAmount,
            })) : undefined,
            locale: ocrResult.locale ? {
                language: { value: ocrResult.locale.language },
                country: { value: ocrResult.locale.country || null },
                currency: { value: ocrResult.locale.currency }
            } : undefined,
            subcategory: ocrResult.subcategory ? { value: ocrResult.subcategory } : undefined,
        };
    };
    const postDataToDatastore = async (formattedData: IMindeeResponse) => {
        try {
            const docKey = nanoid();
            console.log("Formatted Data for Juno:", JSON.stringify(formattedData, null, 2)); // Detailed log
            await setDoc({
                collection: "Receipts",
                doc: {
                    key: docKey,
                    data: formattedData,
                    description: "Optional description about the receipt"
                },
            });
            console.log("Data posted to Juno Datastore successfully");
        } catch (error) {
            console.error("Error posting data to Juno Datastore:", error);
        }
    };
    const handleUploadAndRecognize = async () => {
        if (file) {
            setIsLoading(true);
            setError('');
            try {
                const uploadResult = await uploadFile({
                    data: file,
                    collection: "receipts",
                });
                console.log("File uploaded successfully:", uploadResult);
                const response = await fetch('/api/parseDocument', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ filePath: uploadResult.fullPath }),
                });

                if (response.ok) {
                    const resp = await response.json();
                    console.log("OCR Response:", resp);

                    if (resp && resp.lineItems && resp.date && resp.documentType) {
                        const ocrResult: IOcrResult = {
                            documentId: resp.documentId, // Assuming 'documentId' is a direct property of resp
                            filename: resp.filename, // Replace with actual logic if 'filename' is nested or structured differently
                            supplierName: resp.supplierName?.value, // Extracting 'supplierName' from the nested object
                            supplierAddress: resp.supplierAddress?.value, // Extracting 'supplierAddress' from the nested object
                            totalAmount: resp.totalAmount?.value, // Extracting 'totalAmount' from the nested object
                            purchaseDate: resp.date?.value, // Extracting 'purchaseDate' from the nested 'date' object
                            purchaseTime: resp.time?.value, // Extracting 'purchaseTime' from the nested 'time' object
                            summary: `${resp.supplierName?.value || 'Unknown Supplier'} - ${resp.locale?.currency ? resp.locale.currency : 'Unknown Currency'}${resp.totalAmount?.value?.toFixed(2) || '0.00'} - ${resp.date?.value || 'Date Unknown'} at ${resp.time?.value || 'Time Unknown'}`,
                            documentType: resp.documentType?.value, // Extracting 'documentType' from the nested object
                            locale: {
                                language: resp.locale?.language,
                                country: resp.locale?.country,
                                currency: resp.locale?.currency
                            },
                            subcategory: resp.subcategory?.value,
                            lineItems: resp.lineItems?.map((item: ILineItem) => ({
                                description: item.description,
                                totalAmount: item.totalAmount
                            })) || []
                        };

                        setOcrResult(ocrResult);

                        if (ocrResult) {
                            const formattedData = prepareDataForDatastore(ocrResult);
                            console.log("Data to be posted:", JSON.stringify(formattedData, null, 2));
                            await postDataToDatastore(formattedData);
                        }
                    } else {
                        setError('Error processing document1');
                    }
                } else {
                    setError('Error processing document2');
                }
            } catch (error: unknown) {
                if (error instanceof Error) {
                    console.error('Error processing document:', error.message);
                } else {
                    console.error('An unexpected error occurred:', error);
                }
                setError('Error processing document4');
            } finally {
                setIsLoading(false);
            }
        }
    };
    const handleClose = () => {
        setFile(null);
        setFilePreviewUrl(null);
        setOcrResult(null);
        setError('');
    };

    return (
        <Box
            sx={{
            '& .MuiDrawer-paper': {
                borderTopLeftRadius: '24px',
                borderTopRightRadius: '24px',
            },
        }}>
            {filePreviewUrl && (
                <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 2, padding: 2, boxShadow: 'none', border: 'none' }}>
                    <img src={filePreviewUrl} alt="Preview" style={{ maxWidth: '70%', maxHeight: '50%' }} />
                </Box>
            )}
            {!ocrResult && (
                <Paper elevation={3} sx={{
                    boxShadow: 'none',
                    border: 'none',
                    outline: 'none'
                }}
                >
                    <Box
                        sx={{display: 'flex', justifyContent: 'center', paddingTop:'24px',paddingBottom:'24px', borderRadius: '24px', alignItems: 'center', gap: 2, boxShadow: 'none', border: 'none' }}>
                        {!file && (
                            <>
                                <input
                                    accept="image/*"
                                    style={{ display: 'none' }}
                                    id="raised-button-file"
                                    multiple
                                    type="file"
                                    onChange={handleFileChange}
                                />
                                <label htmlFor="raised-button-file">
                                    <Button
                                        variant="contained"
                                        component="span"
                                        sx={{
                                            '&:focusVisible': {
                                                outline: 'none'
                                            }
                                        }}
                                    >
                                        Choose File
                                    </Button>
                                </label>
                            </>
                        )}
                        {file && (
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleUploadAndRecognize}
                                disabled={isLoading}
                            >
                                {isLoading ? <CircularProgress size={24} /> : 'Read'}
                            </Button>
                        )}
                    </Box>
                </Paper>
            )}
            {error && (
                <Typography color="error">{error}</Typography>
            )}

            {ocrResult && (
                <Paper sx={{ padding: 1, width: '100%', boxShadow: 'none', border: 'none', justifyContent: 'center', alignItems: 'center'}}>
                    <Typography variant="h6" textAlign="center">Purchase Data:</Typography>
                    <Typography variant="h6" textAlign="center">Summary:</Typography>
                    <Typography textAlign="center">Supplier: {ocrResult.supplierName || 'Unknown Supplier'}</Typography>
                    <Typography textAlign="center">Supplier Address: {ocrResult.supplierAddress || 'Address Unknown'}</Typography>
                    <Typography textAlign="center">Currency: {ocrResult.locale?.currency || ''}</Typography>
                    <Typography textAlign="center">Total Amount: {ocrResult.totalAmount || '0.00'}</Typography>
                    <Typography textAlign="center">Date: {ocrResult.purchaseDate || 'Date Unknown'}</Typography>
                    <Typography textAlign="center">Time: {ocrResult.purchaseTime || 'Time Unknown'}</Typography>
                    <br/>
                    <Typography paragraph textAlign="center">
                        <strong>Locale:</strong>
                        <br/>
                        Language: {ocrResult.locale.language},
                        <br/>
                        Country: {ocrResult.locale.country || 'Not specified'},
                        <br/>
                        Currency: {ocrResult.locale.currency}
                        <br/>
                    </Typography>
                    <Typography paragraph textAlign="center">
                        <strong>Subcategory:</strong>
                        <br/>
                        {ocrResult.subcategory}
                        <br/>
                    </Typography>
                    <Typography paragraph textAlign="center">
                        <strong>Items:</strong>
                        <br/>
                        {Array.isArray(ocrResult.lineItems) ? ocrResult.lineItems.map((item, index) => (
                            <React.Fragment key={index}>
                                {item.description}:{ocrResult.locale.currency} {item.totalAmount}
                                <br/>
                            </React.Fragment>
                        )) : 'No line items'}
                    </Typography>
                </Paper>
            )}
            {file && (
                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2, paddingBottom:'24px', boxShadow: 'none', border: 'none' }}>
                    <Button variant="contained" color="secondary" onClick={handleClose}>
                        Done
                    </Button>
                </Box>
            )}
        </Box>
    );
};
export default FileUploadAndRecognize;


