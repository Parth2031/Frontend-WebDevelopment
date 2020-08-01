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

export const createUserProfileDocument = async (userAuth, additionalData) =>
{
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists)
  {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    
    try
    {
      await userRef.set(
      {
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    }
    catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) =>
{
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach((obj) =>
  {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = collections =>
{
  const transformedCollection = collections.docs.map( (doc) =>
  {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });

  return transformedCollection.reduce( (accumulator, collection) =>
  {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;