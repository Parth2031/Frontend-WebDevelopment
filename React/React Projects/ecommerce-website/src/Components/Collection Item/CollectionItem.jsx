import React from 'react';
import { connect } from 'react-redux';

import './CollectionItem.scss'
import CustomButton from '../Custom Button/CustomButton';
import { addItem } from '../../Store/Actions/cartAction';

const collectionItem = ({ item, addItem }) =>
{
  const { name, price, imageUrl } = item;

  return (
    <div className='collection-item'>
      <div className='image' style={{ backgroundImage: `url(${imageUrl})`}}/>
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>Add to cart</CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) =>
{
  return {
    addItem: (item) => dispatch(addItem(item))
  }
};

export default connect(null, mapDispatchToProps)(collectionItem);