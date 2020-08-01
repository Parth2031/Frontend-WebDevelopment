import SHOP_DATA from '../../Pages/Shop Page/ShopData';

const intialState = {
  collections: SHOP_DATA
};

const shopReducer = (state = intialState, action) =>
{
  switch (action.type) {
    default: return state;
  }
};

export default shopReducer;