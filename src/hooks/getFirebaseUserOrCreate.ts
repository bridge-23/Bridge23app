import { onAuthStateChanged, User } from "firebase/auth";
import { doc, getFirestore, getDoc, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { auth } from "../lib/FireBase/initFirebase";

export default function useFirebaseUser() {
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState<User | null>(null);
    const firestore = getFirestore();

    useEffect(() => {
        const listener = onAuthStateChanged(auth, async (firebaseUser) => {
            setUser(firebaseUser);
            setIsLoading(false);

            if (firebaseUser) {
                const userRef = doc(firestore, "users", firebaseUser.uid);
                const userDoc = await getDoc(userRef);
                if (!userDoc.exists()) {
                    await setDoc(userRef, { createdAt: new Date().toISOString() });
                }
            }
        });

        return () => listener();
    }, [firestore]);

    return { isLoading, user };
}
