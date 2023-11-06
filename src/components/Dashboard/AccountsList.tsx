//..src/components/Accounts/AccountList.tsx
import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import AccountCard from '../Accounts/AccountCardComponent';
// Remove listDocs import since it's no longer needed inside this component
interface AccountData {
    accountName: string;
    currentBalance: number;
    currency: string;
    type: string; // Corresponds to accountType
    id: string;
}
interface AccountsListProps {
    accounts: AccountData[]; // Use the AccountData interface
}
const AccountList: React.FC<AccountsListProps> = ({ accounts }) => { // Accept props here
    const handleEdit = (accountId: string) => {
        // Logic to handle edit operation
        console.log(`Edit account with ID: ${accountId}`);
    };

    return (
        <Card
            sx={{
                perspective: '1000px',
                mx: 'auto',
                my: 2,
                p: 2,
                borderRadius: '18px'
            }}
        >
            <CardContent>
                <Typography variant="h5" gutterBottom>
                    Accounts
                </Typography>
                <Grid container spacing={3}>
                    {accounts.map((account) => ( // Use the accounts from props
                        <Grid item xs={12} sm={6} md={4} key={account.id}>
                            <AccountCard
                                accountName={account.accountName}
                                currentBalance={account.currentBalance}
                                accountCurrency={account.currency}
                                accountType={account.type}
                                onEdit={() => handleEdit(account.id)} // Removed the non-null assertion as id should be non-optional
                            />
                        </Grid>
                    ))}
                </Grid>
            </CardContent>
        </Card>
    );
};
export default AccountList;




