import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { firestore, convertCollectionsSnapshotToMap } from '../../Firebase/Firebase';
import { updateCollections } from '../../Store/Actions/shopActions';
import WithSpinner from '../../HigherOrderComponents/withSpinner/withSpinner';
import CollectionsOverview from '../../Components/Collections Overview/CollectionsOverview';
import CollectionPage from '../Collection Page/CollectionPage';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends Component
{
  state = {
    loading: true
  };

  unsubscribeFromSnapshot = null;

  componentDidMount()
  {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');

    collectionRef.get()
      .then( (snapshot) => 
      {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        updateCollections(collectionsMap);
        this.setState({ loading: false });
      });
  }

  render()
  {
    const { match } = this.props;
    const { loading } = this.state;
  
    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} render= { (props) => (<CollectionsOverviewWithSpinner isLoading={loading} {...props} />)}/>
        <Route path={`${match.path}/:collectionId`} render={props => ( <CollectionPageWithSpinner isLoading={loading} {...props} />)}/>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);