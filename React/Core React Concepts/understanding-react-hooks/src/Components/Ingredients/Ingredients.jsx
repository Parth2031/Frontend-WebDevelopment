// TODO:: Some Important Notes Regarding useEffect() & useCallback() functionality :-

// ? useEffect(function, [dependencies]) : It means that useEffect will re-render when dependencies are present or else it won't. 
// * Since, with dependencies, it works like a componentDidMount() but without dependencies, it works like componentDidUpdate().

// ! useCallback(function, [dependencies]) : It works like shouldComponetWillUpdate() So, when we use it not gets re-created everytime
// * but gets updated only when the Specified Component is updated. 

import React, { useState, useEffect, useCallback } from 'react';

import IngredientForm from './IngredientForm';
import Search from './Search';
import IngredientList from './IngredientList';

const Ingredients = () =>
{
  const [userIngredients, setUserIngredients] = useState([]);

  // ! In this case, useEffect() is working like a componentDidMount() :->

  // useEffect( () => 
  // {
  //   fetch('https://understanding-react-hooks.firebaseio.com/ingredients.json')
  //     .then( (response) => {
  //       return response.json();
  //     })
  //     .then( (responseData) =>
  //     {
  //       const loadedIngredients = [];
  //       for (const key in responseData)
  //       {
  //         loadedIngredients.push(
  //         {
  //           id: key,
  //           title: responseData[key].title,
  //           amount: responseData[key].amount
  //         });
  //       }  

  //       setUserIngredients(loadedIngredients);
  //     });
  // }, []); 

  useEffect(() => { console.log("Rendering Ingredients Mounting") }, []);

  // ! In this case, useEffect() is working like a componentDidUpdate() :->
  
  useEffect(() => { console.log("Rendering Ingredients")}); 

  // ! In this case, useCallback() is protecting Infinite Loop by working like shouldComponentWillUpdate() :->

  const filteredIngredientsHandler = useCallback( (filteredIngredients) => {
    setUserIngredients(filteredIngredients);
  }, [setUserIngredients]);
  
  const addIngredientHandler = (ingredient) =>
  {
    fetch('https://understanding-react-hooks.firebaseio.com/ingredients.json',
    {
      method: 'POST',
      body: JSON.stringify(ingredient),
      headers: { 'Content-Type': 'application/json' }
    })
      .then( (response) => {
        return response.json();
      })
      .then( (responseData) =>
      {
        setUserIngredients( (prevIngredients) => 
        [
          ...prevIngredients,
          { id: responseData.name, ...ingredient }
        ]);
      });
  }

  const removeIngredientHandler = (ingredientId) =>
  {
    setUserIngredients( (prevIngredients) =>
      prevIngredients.filter(ingredient => ingredient.id !== ingredientId)
    );
  };

  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngredientHandler}/>
      <section>
        <Search onLoadIngredients={filteredIngredientsHandler}/>
        <IngredientList ingredients={userIngredients} onRemoveItem={removeIngredientHandler}/>  
      </section>
    </div>
  );
}

export default Ingredients;
