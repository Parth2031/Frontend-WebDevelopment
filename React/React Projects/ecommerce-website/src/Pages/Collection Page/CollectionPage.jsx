import React from 'react';
import { connect } from 'react-redux';

import { CollectionPageContainer, CollectionTitle, CollectionItemsContainer } from './CollectionPageStyles';
import CollectionItem from '../../Components/Collection Item/CollectionItem';
import { selectCollection } from '../../Store/Selectors/shopSelector';

const collectionPage = ({ collection }) =>
{
  const { title, items } = collection;

  return (
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsContainer>
        { items.map(item => (
            <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state, ownProps) =>
{
  return {
    collection: selectCollection(ownProps.match.params.collectionId)(state)
  }; 
}

export default connect(mapStateToProps)(collectionPage);