import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './CollectionsOverview.scss';
import CollectionPreview from '../Collection Preview/CollectionPreview';
import { selectCollectionsForPreview } from '../../Store/Selectors/shopSelector';

const collectionsOverview = ({ collections }) => 
{
  return (
    <div className='collections-overview'>
    { collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
    </div>
  );
}

const mapStateToProps = createStructuredSelector
({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(collectionsOverview);