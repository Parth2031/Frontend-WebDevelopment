import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCollectionsStartAsync } from '../../Store/Actions/shopActions';
import CollectionsOverviewContainer from '../../Components/Collections Overview/CollectionsOverviewContainer';
import CollectionPageContainer from '../Collection Page/CollectionPageContainer';

class ShopPage extends Component
{
  componentDidMount()
  {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render()
  {
    const { match } = this.props;

    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverviewContainer}/>
        <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer}/>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) =>
{
  return {
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
  }; 
}

export default connect(null, mapDispatchToProps)(ShopPage);