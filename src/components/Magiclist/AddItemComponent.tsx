//..src/components/Magiclist/AddItemComponent.tsx
import React, {ChangeEvent, useState, useContext, useEffect} from 'react';
import {
    Box,
    Button,
    TextField,
    Backdrop,
    CircularProgress,
    Dialog,
    Drawer,
    DialogContent,
    DialogTitle,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    SelectChangeEvent,
    Snackbar,
    Alert,
    AlertColor
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import useMediaQuery from '@mui/material/useMediaQuery';
import { AuthContext } from "../../contexts/AuthContext";
import {listDocs, setDoc} from "@junobuild/core-peer";
import {nanoid} from "nanoid";
import {MagicList} from "../../types";
import { useRecoilState } from 'recoil';
import { magicListsState, magicListItemState } from '../../state/atoms';
import { useLoading } from '../../contexts/LoadingContext';
import { styled, useTheme } from '@mui/material/styles';
interface AddItemComponentProps {selectedListId?: string;}

//TODO: Display currecncy from library currency
const AddItemComponent: React.FC<AddItemComponentProps> = ({ selectedListId }) => {
    const [open, setOpen] = useState(false);
    const theme = useTheme();
    const { user } = useContext(AuthContext);
    const { setLoading } = useLoading();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState<AlertColor>('success');
    const [addDialogOpen, setAddDialogOpen] = useState(false);
    const [showMoreFields, setShowMoreFields] = useState(false);
    const [backdropOpen, setBackdropOpen] = useState(false);
    const backdropStyle = {
        zIndex: 1300, // Ensure this is higher than the dialog's z-index
        color: '#fff',
    };
    const [magicLists, setMagicLists] = useState<MagicList[]>([]);
    const [items, setItems] = useRecoilState(magicListItemState);
    const [newItem, setNewItem] = useState({
        itemName: '',
        itemLink: '',
        description: '',
        price: 0,
        currency: '',
        listId: selectedListId || '', // Use the selected list ID if provided
    });
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setNewItem({
            ...newItem, [event.target.name]: event.target.value });
    };
    const handleSelectChange = (event: SelectChangeEvent) => {
        // Find the selected list by its ID
        //const selectedList = magicLists.find(list => list.id === event.target.value);
        // Update the state with the new list's ID and name
        setNewItem({
            ...newItem,
            listId: event.target.value,
        });
    };
    const handleCurrencyChange = (event: SelectChangeEvent) => {
        setNewItem({ ...newItem, currency: event.target.value });
    };
    const isValidUrl = (url: string): boolean => {
        const urlRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/;
        return urlRegex.test(url);
    };
    const isValidPrice = (price: number): boolean => {
        // Since price is already a number, we just need to check if it's positive
        return !isNaN(price) && isFinite(price) && price > 0;
    };

    useEffect(() => {
        // Self-invoking async function inside useEffect
        (async () => {
            try {
                await fetchMagicLists();
            } catch (error) {
                console.error("Error in useEffect when fetching magic lists:", error);
                // Handle the error appropriately, e.g., show an error message to the user
            }
        })();
    }, []);
    const fetchMagicLists = async () => {
        let fetchedLists: MagicList[] = [];
        try {
            const magicListData = await listDocs({
                collection: "MagicLists"
            });

            if (magicListData && magicListData.items) {
                fetchedLists = magicListData.items.map(doc => {
                    const data = doc.data as MagicList;
                    return {
                        id: doc.key,
                        name: data.name,
                        owner: data.owner
                    };
                });
            } else {
                console.error("Magic list data is undefined or items are missing");
                alert('Failed to fetch magic lists. Please try again.');
            }
        } catch (error) {
            console.error("Error fetching magic lists:", error);
            alert('Failed to fetch magic lists. Please try again.');
        }

        setMagicLists(fetchedLists);
    };
    const handleAddItem = async () => {
        if (!newItem.itemName.trim()) {
            setSnackbarMessage('Please enter an item name.');
            setSnackbarSeverity('error');
            setSnackbarOpen(true);
            return;
        }
        if (!user) {
            alert('You must be logged in to add an item.');
            return;
        }
        if (newItem.itemLink && !isValidUrl(newItem.itemLink)) {
            alert('Please enter a valid URL for the item link.');
            return;
        }
        if (newItem.price && !isValidPrice(newItem.price)) {
            alert('Please enter a valid price. Price should be a positive number.');
            return;
        }
        const selectedListName = magicLists.find(list => list.id === newItem.listId)?.name || '';
        const noteId = nanoid();
        setLoading(true);
        try {
            await setDoc({
                collection: "MagicListItems",
                doc: {
                    key: noteId,
                    data: {
                        ...newItem,
                        listId: newItem.listId,
                        checked: false,
                        listName: selectedListName,
                        owner: { userId: user.key}
                    }
                }
            });
            setSnackbarMessage('Item added successfully');
            setSnackbarSeverity('success');
            setSnackbarOpen(true);
            setNewItem({
                itemName: '',
                itemLink: '',
                description: '',
                price: 0,
                currency: '',
                listId: '',
            });
            setItems(prevItems => [...prevItems, {
                ...newItem,
                id: noteId, // Assuming the ID is generated and returned by your backend
                listName: selectedListName,
                checked: false,
                // Include any other necessary properties
            }]);
        } catch (error) {
            console.error("Error adding note:", error);
            setSnackbarMessage('Failed to add note. Please try again.');
            setSnackbarSeverity('error');
            setSnackbarOpen(true);
        } finally {
            setLoading(false);
            setAddDialogOpen(false);
        }
    };
    const toggleComponent = (newOpen: boolean) => () => {
        setOpen(newOpen);
        if (!newOpen) {
            setShowMoreFields(false); // Reset showMoreFields when component is closed
        }
    };
    const renderContent = () => (
        <>
            <TextField
                autoFocus
                margin="dense"
                id="itemName"
                name="itemName"
                label="Item Name"
                type="text"
                fullWidth
                value={newItem.itemName}
                onChange={handleInputChange}
            />
            <FormControl fullWidth margin="dense">
                {/*<InputLabel id="list-select-label">List</InputLabel>*/}
                <InputLabel shrink htmlFor="select-multiple-native">
                    Magic List
                </InputLabel>
                <Select
                    labelId="list-select-label"
                    id="list-select"
                    name="list"
                    value={newItem.listId} // Use listId here
                    label="Magic List"
                    onChange={handleSelectChange}
                >
                    {magicLists.map((list) => (
                        <MenuItem key={list.id} value={list.id}>{list.name}</MenuItem>
                    ))}
                </Select>
            </FormControl>

            {showMoreFields && (
                <>
                    <TextField
                        margin="dense"
                        id="itemLink"
                        name="itemLink" // Changed from 'link' to 'itemLink'
                        label="Link to Item"
                        type="url"
                        fullWidth
                        value={newItem.itemLink}
                        onChange={handleInputChange}
                    />
                    <TextField
                        margin="dense"
                        id="description"
                        name="description"
                        label="Item Description"
                        type="text"
                        fullWidth
                        multiline
                        rows={3}
                        value={newItem.description}
                        onChange={handleInputChange}
                    />
                    <TextField
                        margin="dense"
                        id="price"
                        name="price"
                        label="Item Price"
                        type="number"
                        fullWidth
                        value={newItem.price}
                        onChange={handleInputChange}
                    />

                    <FormControl fullWidth margin="dense">
                        <InputLabel id="currency-select-label">Currency</InputLabel>
                        <Select
                            labelId="currency-select-label"
                            id="currency-select"
                            name="currency"
                            value={newItem.currency}
                            onChange={handleCurrencyChange}
                        >
                            <MenuItem value="IDR">IDR</MenuItem>
                            <MenuItem value="UZS">UZS</MenuItem>
                            <MenuItem value="USD">USD</MenuItem>
                            <MenuItem value="EUR">EUR</MenuItem>
                            <MenuItem value="BTC">BTC</MenuItem>
                            <MenuItem value="ETH">ETH</MenuItem>
                            <MenuItem value="ICP">ICP</MenuItem>
                            {/* Add other currencies as needed */}
                        </Select>
                    </FormControl>
                </>
            )}
            {/* Include other inputs and form controls */}
            <Box display="flex" justifyContent="center" alignItems="center" mt={2} gap={2}>
                {!showMoreFields && (
                    <Button variant="outlined" onClick={() => setShowMoreFields(true)} color="primary">More</Button>
                )}
                <Button variant="outlined" onClick={toggleComponent(false)} color="primary">Cancel</Button>
                <Button variant="outlined" onClick={handleAddItem} color="primary">Add</Button>
            </Box>
        </>
    );

    return (
        <Box>
            <Button
                variant="contained"
                color="primary"
                startIcon={<AddIcon />}
                onClick={toggleComponent(true)}
                sx={{ borderRadius: '24px' }}
            >
                Add New Item
            </Button>

            {isMobile ? (
                // Mobile: Render as SwipeableDrawer or Drawer
                <Drawer
                    anchor="bottom"
                    open={open}
                    onClose={toggleComponent(false)}
                    sx={{
                        '& .MuiDrawer-paper': {
                            borderTopLeftRadius: '24px',
                            borderTopRightRadius: '24px',
                            paddingBottom: '144px',
                        },
                    }}
                >
                    <Box p={2} role="presentation">
                        {renderContent()}
                    </Box>
                </Drawer>
            ) : (
                // Desktop: Render as Dialog
                <Dialog
                    open={open}
                    onClose={toggleComponent(false)}
                    sx={{
                        '& .MuiDialog-paper': {
                            borderRadius: '24px',
                        },
                    }}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Add Item</DialogTitle>
                    <DialogContent>
                        {renderContent()}
                    </DialogContent>
                </Dialog>

            )}
            {/* Snackbar and Backdrop */}
            <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={() => setSnackbarOpen(false)}>
                <Alert onClose={() => setSnackbarOpen(false)} severity={snackbarSeverity} sx={{ width: '100%' }}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>
            <Backdrop open={backdropOpen} style={{ zIndex: 1300, color: '#fff' }}>
                <CircularProgress color="inherit" />
            </Backdrop>
        </Box>
    );
};
export default AddItemComponent;
