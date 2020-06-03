// TODO:: Some Important Notes Regarding useReducer, useEffect() & useCallback() functionality :-

// ! useReducer() : It is an alternative to useState() & React Redux for Handling Multiple interconnected/Global State's.

// ? useEffect(function, [dependencies]) : It means that useEffect will re-render when dependencies are present or else it won't. 
// * Since, with dependencies, it works like a componentDidMount() but without dependencies, it works like componentDidUpdate().

// ! useCallback(function, [dependencies]) : It works like shouldComponetWillUpdate() So, when we use it not gets re-created everytime
// * but gets updated only when the Specified Component is updated. 

import React, { useReducer, useEffect, useCallback } from 'react';

import IngredientForm from './IngredientForm';
import Search from './Search';
import IngredientList from './IngredientList';
import ErrorModal from '../UI/ErrorModal';

const ingredientReducer = (state, action) =>
{
  switch (action.type)
  {
    case 'SET': return action.ingredients;
      
    case 'ADD': return [...state, action.ingredient];
    
    case 'DELETE': return state.filter( ing =>  ing.id !== action.id );
  
    default: throw new Error("Should Not Get There");  
  }
}

const httpReducer = (state, action) =>
{
  switch (action.type)
  {
    case 'SEND': return { loading: true, error: null };

    case 'RESPONSE': return { ...state, loading: false };
      
    case 'ERROR': return { loading: false, error: action.errorMessage };
    
    case 'CLEAR': return { ...state, error: null };
    
    default: throw new Error("Should Not Get There");    
  }
}

const Ingredients = () =>
{
  const [userIngredients, dispatch] = useReducer(ingredientReducer, []);
  const [httpState, dispatchHttp] = useReducer(httpReducer, { loading: false, error: null });

  // const [userIngredients, setUserIngredients] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState();

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

  const filteredIngredientsHandler = useCallback( (filteredIngredients) =>
  {
    // setUserIngredients(filteredIngredients);
    dispatch({ type: 'SET', ingredients: filteredIngredients});
  
  }, []);
  
  const addIngredientHandler = (ingredient) =>
  {
    dispatchHttp({ type: 'SEND' });

    fetch('https://understanding-react-hooks.firebaseio.com/ingredients.json',
    {
      method: 'POST',
      body: JSON.stringify(ingredient),
      headers: { 'Content-Type': 'application/json' }
    })
      .then( (response) => 
      {
        dispatchHttp({ type: 'RESPONSE' });
        return response.json();
      })
      .then( (responseData) =>
      {
        // setUserIngredients( (prevIngredients) => 
        // [
        //   ...prevIngredients,
        //   { id: responseData.name, ...ingredient }
        // ]);
   
        dispatch({ type: 'ADD', ingredient: { id: responseData.name, ...ingredient } });
      });
  }

  const removeIngredientHandler = (ingredientId) =>
  {
    dispatchHttp({ type: 'SEND' });

    fetch(`https://understanding-react-hooks.firebaseio.com/ingredients/${ingredientId}.json`, {
      method: 'DELETE'
    })
      .then( (response) =>
      {
        dispatchHttp({ type: 'RESPONSE' });
        // setUserIngredients((prevIngredients) =>
        //   prevIngredients.filter(ingredient => ingredient.id !== ingredientId)
        // );
        dispatch({ type: 'DELETE', id: ingredientId });
      })
      .catch( (error) => 
      {
        // setError("Something went wrong");
        // setIsLoading(false);
        dispatchHttp({ type: 'ERROR', errorMessage: "Something went wrong"});
      });
  };

  // ! React batches State Updates :  Multiple set State are executed as one time together if called within a same function -->

  const clearError = () =>
  {
    // setError(null);
    // setIsLoading(false);
    dispatchHttp({ type: 'CLEAR' });
  }

  return (
    <div className="App">
      {httpState.error && <ErrorModal onClose={clearError}>{httpState.error}</ErrorModal>}
      <IngredientForm onAddIngredient={addIngredientHandler} loading={httpState.loading}/>
      <section>
        <Search onLoadIngredients={filteredIngredientsHandler}/>
        <IngredientList ingredients={userIngredients} onRemoveItem={removeIngredientHandler}/>  
      </section>
    </div>
  );
}

export default Ingredients;
