import * as actionTypes from './actionTypes';
import { firestore, convertCollectionsSnapshotToMap } from '../../Firebase/Firebase';

// export const updateCollections = (collectionsMap) => 
// {
//   return {
//     type: actionTypes.UPDATE_COLLECTIONS,
//     payload: collectionsMap
//   };
// }
  
export const fetchCollectionsStart = () => 
{
  return {
    type: actionTypes.FETCH_COLLECTIONS_START
  };
}

export const fetchCollectionsSuccess = (collectionsMap) => 
{
  return {
    type: actionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
  };
}

export const fetchCollectionsFailure = errorMessage =>
{
  return {
    type: actionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
  };
}  

export const fetchCollectionsStartAsync = () =>
{
  return (dispatch) =>
  {
    const collectionRef = firestore.collection('collections');
    dispatch(fetchCollectionsStart());

    collectionRef.get()
      .then(snapshot =>
      {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
      })
      .catch(error => dispatch(fetchCollectionsFailure(error.message)));
  };
};