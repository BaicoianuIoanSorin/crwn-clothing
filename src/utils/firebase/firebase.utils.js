import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCWMLvH9bs81pxz1MRmRlaT5n7vNM_2NuA",
  authDomain: "crwn-clothing-db-c4b0d.firebaseapp.com",
  projectId: "crwn-clothing-db-c4b0d",
  storageBucket: "crwn-clothing-db-c4b0d.appspot.com",
  messagingSenderId: "573998010866",
  appId: "1:573998010866:web:de98a9b2742d0b05e59b6b",
};

// authentication
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// storage
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
 const userDocRef = doc(db, 'users', userAuth.uid); 

 const userSnapshot = await getDoc(userDocRef);

 if(!userSnapshot.exists()) {
  const { displayName, email } = userAuth;
  const createdAt = new Date();
  
  try {
    await setDoc(userDocRef, {
      displayName, 
      email,
      createdAt
    })
  }
  catch(error) {
    console.log('error creating the user', error.message);
  }
 }

 return userDocRef;
}