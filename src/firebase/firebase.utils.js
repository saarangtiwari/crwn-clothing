import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCR2yBesAO-rEt7zlA4ECVhxCsZ5rObzqc",
    authDomain: "crwn-db-f7aa2.firebaseapp.com",
    databaseURL: "https://crwn-db-f7aa2.firebaseio.com",
    projectId: "crwn-db-f7aa2",
    storageBucket: "",
    messagingSenderId: "189144079037",
    appId: "1:189144079037:web:194e70c4a715e2c8"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });

        } catch (error) {
            console.error(`Error creating a user ` + error.message);
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Google Authentication

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;