import React, { Component } from 'react';
import Auxiliary from '../../HigerOrderComponents/Auxiliary/Auxiliary';
import withErrorHandler from '../../HigerOrderComponents/withErrorHandler/withErrorHandler';
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/Burger/Build Controls/BuildControls';
import Modal from '../../Components/UI/Modal/Modal';
import OrderSummary from '../../Components/Burger/Order Summary/OrderSummary';
import Spinner from '../../Components/UI/Spinner/Spinner';
import axios from '../../axios-order';

const INGREDIENT_PRICES =
{
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

class BurgerBuilder extends Component 
{
  // constructor(props)
  // {
  //   super(props);
  //   this.state = {};
  // }

  state =
  {
    // ingredients: 
    // {
    //   salad: 0,
    //   bacon: 0,
    //   cheese: 0,
    //   meat: 0
    // },

    ingredients:null,
    totalPrice: 4,
    purchasable: false,
    purchasing: false,
    loading: false,
    error: false
  }
  
  componentDidMount()
  {
    axios.get('https://react-burger-e91a6.firebaseio.com/ingredients.json')
      .then(response => {
        this.setState({ ingredients: response.data });
      })
      .catch( error => { this.setState({ error: true }); }); 
  }

  updatePurchaseState (ingredients)
  {
    const sum = Object.keys(ingredients)
      .map( ingredientKey => {
        return ingredients[ingredientKey];
      })
      .reduce( (sum, element) => {
        return sum + element;
      }, 0);
    
    this.setState({ purchasable: sum > 0 });
  }

  addIngredientHandler = (type) =>
  {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    
    const updatedIngredients = {
      ...this.state.ingredients
    };
  
    updatedIngredients[type] = updatedCount;
  
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
  
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchaseState(updatedIngredients);
  }

  removeIngredientHandler = (type) =>
  {
    const oldCount = this.state.ingredients[type];
  
    if (oldCount <= 0) {
      return;
    }
  
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
  
    updatedIngredients[type] = updatedCount;
  
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
  
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchaseState(updatedIngredients);
  }


  purchaseHandler = () => {
    this.setState({ purchasing: true });
  }

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  }

  purchaseContinueHandler = () =>
  {
    // alert('You continue!');
    
    this.setState({ loading: true });

    const order =
    {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,             // ! <-- This should be updated at the Database to get Total Price as it is not the correct way.
      customer:
      {
        name: 'Parth',
        address:
        {
          street: 'Joshi Colony',
          zipCode: 110091,
          country: 'India'
        },
        email: 'rastogiparth85@gmail.com'
      },
      deliveryMethod: 'fastest'
    }

    // ! /orders.json is the Format needed for Firebase Database as it stores in this format only.

    axios.post('/orders.json', order)
      .then((response) =>
      {
        console.log(response);
        this.setState({ loading: false, purchasing:false });
      })
      .catch((error) =>
      {
        console.log(error);
        this.setState({ loading: false, purchasing: false });
      }); 
  }

  render()
  {
    const disabledInfo = {
      ...this.state.ingredients
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0       // ! In this format, {salad: true, meat: false, ...}
    }

    let orderSummary = null;
    let burger = this.state.error ? <p style={{ textAlign: 'center' }}>Ingredients can't be loaded!</p> : <Spinner />;

    if (this.state.ingredients)
    {
      burger =
      (
        <Auxiliary>
          <Burger burgerIngredients={this.state.ingredients} />
          <BuildControls
            ingredientAdded={this.addIngredientHandler}
            ingredientRemoved={this.removeIngredientHandler}
            disabled={disabledInfo}
            purchasable={this.state.purchasable}
            ordered={this.purchaseHandler}
            price={this.state.totalPrice} /> 
        </Auxiliary>  
      );
      
      orderSummary = <OrderSummary
                        ingredients={this.state.ingredients}
                        price={this.state.totalPrice}
                        purchaseCancelled={this.purchaseCancelHandler}
                        purchaseContinued={this.purchaseContinueHandler} /> 
    }  

    if (this.state.loading) {
      orderSummary = <Spinner />;
    }

    return (
      <Auxiliary>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
          {orderSummary}      
        </Modal> 
        {burger}
      </Auxiliary>
    );
  }
}

export default withErrorHandler(BurgerBuilder,axios);