// TODO:: Some Important Notes Regarding useState() functionality :-

// ! useState(current_State, updated_Current_State), So, now we need to access the Current State & Updated State by ->
// ? Array Destructuring Concept.
// * NOTE :- We can use Multiple useState() instead of creating an Object for useState() as it makes easy for handling Multiple State.
// ! Since, like Class Based State which merges the Old State, it rewrites the Old State with Updated State. so, above method is better.

import React, { useState } from 'react';

import Card from '../UI/Card';
import LoadingIndicator from '../UI/LoadingIndicator';
import './IngredientForm.css';

const IngredientForm = React.memo( (props) =>
{
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');

  const submitHandler = event =>
  {
    props.onAddIngredient({ title: enteredTitle, amount: enteredAmount });

    event.preventDefault();
  };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input
              type="text"
              id="title"
              value={enteredTitle}
              onChange={(event) => { setEnteredTitle(event.target.value) }} />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              value={enteredAmount}
              onChange={(event) => { setEnteredAmount(event.target.value) }} />
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
            {props.loading && <LoadingIndicator />}
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
