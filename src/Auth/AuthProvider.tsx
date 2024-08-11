import { createContext, ReactNode, useCallback, useEffect, useMemo, useState } from "react";
import { IAuthFromInitialValue, IFirebaseAuthContextType, IUserData } from "../utils/interface";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, UserCredential, AuthError, onAuthStateChanged } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { app, db } from "./firebaseConfig";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

const defaultAuthContext: IFirebaseAuthContextType = {
    user: null,
    login: async () => {
        throw new Error("Not implemented");
    },
    signUp: async () => {
        throw new Error("Not implemented");
    },
    signOut: () => { },
    isLoading: false,
    setIsLoading: () => { },
    authStatus: "unauthenticated",
};

export const FirebaseAuthContext = createContext<IFirebaseAuthContextType>(defaultAuthContext);
const AuthProvider = ({ children }: { children: ReactNode }) => {

    const [user, setUser] = useState<IUserData | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [authStatus, setAuthStatus] = useState<'authenticated' | 'unauthenticated'>('unauthenticated')
    const auth = getAuth()

    const login = useCallback(({ email, password }: IAuthFromInitialValue) => {
        return signInWithEmailAndPassword(auth, email, password)
    }, [auth]);


    const signUp = useCallback(({ email, password, name, image }: IAuthFromInitialValue) => {
        const signUpResponse = new Promise<UserCredential>((resolve, reject) => {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const { uid } = userCredential.user
                    const storage = getStorage();
                    const storageRef = ref(storage, `users/${uid}/profile_picture`);
                    const uploadTask = image ? uploadBytesResumable(storageRef, image) : null;
                    uploadTask?.on('state_changed',
                        (snapshot) => { },
                        (error) => {
                            // Handle error
                            reject(error);
                        },
                        () => {
                            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                                addDoc(collection(db, 'users'), { uid, email, password, name, profilePicture: downloadURL, }).then(() => resolve(userCredential)).catch((error) => reject(error))
                            }).catch((error) => {
                                console.error('Error adding document:', error);
                                reject(error);
                            });
                        }
                        ,)



                })
                .catch((_error) => {
                    const error = _error as AuthError;
                    reject(error);
                });
        });

        return signUpResponse;
    }, [auth]);

    const signOut = useCallback(() => {
        return signOut();
    }, []);

    // useEffect(() => {
    //     const unsubscribe =
    //         onAuthStateChanged(auth,
    //             (firebaseUser) => {
    //                 if (firebaseUser && authStatus !== 'authenticated') {
    //                     firebase
    //                         .database()
    //                         .ref(`users/${firebaseUser.uid}`)
    //                         .once('value')
    //                         .then((snapshot) => {
    //                             const userSnapshot = snapshot.val() as User;
    //                             setUser(userSnapshot);
    //                             setAuthStatus('authenticated');
    //                         });
    //                 } else if (authStatus !== 'unauthenticated') {
    //                     setUser(null);
    //                     setAuthStatus('unauthenticated');
    //                 }

    //                 setIsLoading(false);
    //             },
    //             (error) => {
    //                 setAuthStatus('unauthenticated');
    //                 setIsLoading(false);
    //             }
    //         );
    //     return () => {
    //         setAuthStatus('configuring');
    //         unsubscribe?.();
    //     };
    // }, []);

    const authContextValue = useMemo(
        () =>
        ({
            user,
            authStatus,
            isLoading,
            login,
            signUp,
            signOut,
            setIsLoading
        } as IFirebaseAuthContextType),
        [user, isLoading, login, signUp, signOut, setIsLoading, authStatus]
    );



    return (app ? <FirebaseAuthContext.Provider value={authContextValue}>{children}</FirebaseAuthContext.Provider> : <></>);
}

export default AuthProvider;