//..src/components/Dashboard/ExpenseCardComponent.tsx
import React from 'react';
import { Box, Card, CardContent, Typography, Avatar } from "@mui/material";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const ExpenseCardComponent: React.FC = () => {
    return (
        <Card
            sx={{
                perspective: "1000px",
                width: { xs: '45%', sm: '150px' },
                height: '150px',
                cursor: "pointer",
                borderRadius: "24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: 3,
            }}>
            <CardContent sx={{ textAlign: 'center' }}> {/* Add textAlign to center content */}
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Avatar sx={{ backgroundColor: 'red', mb: 2 }}>
                        <ArrowDownwardIcon style={{ color: 'white', fontSize: 'large' }} />
                    </Avatar>
                    <Typography variant="caption" color="textSecondary">
                        Expense
                    </Typography>
                    <Typography variant="subtitle2" sx={{ color: 'red' }}> {/* Red color for expense */}
                        IDR 3,760,000.00
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
};

export default ExpenseCardComponent;


