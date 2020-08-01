import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { CollectionsOverviewContainer } from './CollectionsOverviewStyles';
import CollectionPreview from '../Collection Preview/CollectionPreview';
import { selectCollectionsForPreview } from '../../Store/Selectors/shopSelector';

const collectionsOverview = ({ collections }) => 
{
  return (
    <CollectionsOverviewContainer>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </CollectionsOverviewContainer>
  );
}

const mapStateToProps = createStructuredSelector
({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(collectionsOverview);