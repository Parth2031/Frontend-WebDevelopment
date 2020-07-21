import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config =
{
  apiKey: "AIzaSyAS-S3nvPSkxyockWXUlt-bt_GsgeETBvQ",
  authDomain: "react-clothing-8c2a8.firebaseapp.com",
  databaseURL: "https://react-clothing-8c2a8.firebaseio.com",
  projectId: "react-clothing-8c2a8",
  storageBucket: "react-clothing-8c2a8.appspot.com",
  messagingSenderId: "119963990254",
  appId: "1:119963990254:web:d176381d310815bc679bff",
  measurementId: "G-KQD5J9WPG8"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;