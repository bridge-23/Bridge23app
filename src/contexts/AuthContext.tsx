//..src/contexts/AuthContext.tsx
import React, { createContext, useEffect, useState } from "react";
import { type User } from "@junobuild/core";
import dynamic from "next/dynamic";

const DynamicICPSignInButton = dynamic(() => import("../components/Buttons/ICPSignInButton"));

// Define the context type
interface AuthContextType {
    user: User | null;
    loading: boolean;
    error: ExtendedError | null; // Change this to your custom error type
}
// Create the context with default values
export const AuthContext = createContext<AuthContextType>({
    user: null,
    loading: false,
    error: null
});
// Define the error props interface
interface ErrorProps {
    message: string;
    code?: number;
    // ... other properties
}
// Define the custom error class
class ExtendedError extends Error {
    code?: number;
    constructor({ message, code }: ErrorProps) {
        super(message);
        this.code = code;
    }
}
// Define the provider props
interface AuthProps {
    children: React.ReactNode;
}
// Define the provider component
export const AuthProvider: React.FC<AuthProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<ExtendedError | null>(null);

    useEffect(() => {
        setLoading(true);
        let unsubscribe: (() => void) | undefined = undefined;

        const load = async () => {
            try {
                const {authSubscribe} = await import("@junobuild/core");

                unsubscribe = authSubscribe((newUser: User | null) => {
                    setUser(newUser);
                    setLoading(false);
                    if (!newUser) {
                        console.log("User is signed out or session has expired");
                    }
                });
            } catch (error: any) { // Use 'any' or perform type checking
                console.error(error.message);
                setError(new ExtendedError({ message: 'An error occurred', code: error.code }));
                setLoading(false);
            }
        }

        load();

        // Clean-up function
        return () => {
            unsubscribe?.();
        };
    }, []);

    return (
        <AuthContext.Provider value={{ user, loading, error }}>
            {loading ? (
                <>
                    <div>Loading...</div>
                    <DynamicICPSignInButton />
                </>
            ) : error ? (
                <div>Error: {error.message}</div> // Display error message
            ) : (
                children
            )}
        </AuthContext.Provider>
    );
};




