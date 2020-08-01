import React from 'react';

import { CartItemContainer, ItemDetailsContainer, CartItemImage } from './CartItemStyles';

const cartItem = ({ item }) => 
{
  const { imageUrl, price, name, quantity } = item;

  return (
    <CartItemContainer>
      <CartItemImage src={imageUrl} alt='item' />
      <ItemDetailsContainer>
        <span>{name}</span>
        <span>{quantity} x ${price}</span>
      </ItemDetailsContainer>
    </CartItemContainer>
  );
}

export default cartItem;