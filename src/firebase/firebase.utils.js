// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'reading-tracker-db.firebaseapp.com',
  projectId: 'reading-tracker-db',
  storageBucket: 'reading-tracker-db.appspot.com',
  messagingSenderId: '46267083813',
  appId: '1:46267083813:web:1627a63e52c59bfb86a3cc',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  // eslint-disable-next-line @typescript-eslint/no-use-before-define
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
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  // eslint-disable-next-line consistent-return
  return userRef;
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
