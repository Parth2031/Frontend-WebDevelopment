import React from 'react';
import { connect } from 'react-redux';

import { CollectionItemContainer, CollectionFooterContainer, AddButton, BackgroundImage, NameContainer, PriceContainer} from './CollectionItemStyles';
import { addItem } from '../../Store/Actions/cartAction';

const collectionItem = ({ item, addItem }) =>
{
  const { name, price, imageUrl } = item;

  return (
    <CollectionItemContainer>
      <BackgroundImage className='image' imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton onClick={() => addItem(item)} inverted> Add to cart </AddButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch) =>
{
  return {
    addItem: (item) => dispatch(addItem(item))
  }
};

export default connect(null, mapDispatchToProps)(collectionItem);