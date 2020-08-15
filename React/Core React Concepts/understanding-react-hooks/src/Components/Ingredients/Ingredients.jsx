// TODO:: Some Important Notes Regarding useReducer, useEffect() & useCallback() functionality :-

// & useReducer() : It is an alternative to useState() & React Redux for Handling Multiple interconnected/Global State's.

// ? useEffect(function, [dependencies]) : It means that useEffect will re-render when dependencies are present or else it won't. 
// * Since, with dependencies, it works like a componentDidMount() but without dependencies, it works like componentDidUpdate().

// ! useCallback(function, [dependencies]) : It works like shouldComponetWillUpdate() So, when we use it not gets re-created everytime
// ~ but gets updated only when the Specified Component is updated. 

import React, { useReducer, useEffect, useCallback, useMemo } from 'react';

import IngredientForm from './IngredientForm';
import Search from './Search';
import IngredientList from './IngredientList';
import ErrorModal from '../UI/ErrorModal';
import useHttp from '../../Custom Hooks/Http';

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

const Ingredients = () =>
{
  const [userIngredients, dispatch] = useReducer(ingredientReducer, []);

  const {isLoading, data, error, sendRequest, requestExtra, requestIdentifier, clear} = useHttp();

  // const [userIngredients, setUserIngredients] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState();

  // ! In this case, useEffect() is working like a componentDidMount() :->

  useEffect(() => { console.log("Rendering Ingredients Mounting") }, []);

  useEffect( () => 
  { 
    if (!isLoading && !error && requestIdentifier === 'REMOVE_INGREDIENT') {
      dispatch({ type: 'DELETE', id: requestExtra });
    }  
    else if (!isLoading && !error && requestIdentifier === 'ADD_INGREDIENT') {
      dispatch({ type: 'ADD', ingredient: { id: data.name, ...requestExtra } });
    }

  }, [data, requestExtra, requestIdentifier, isLoading, error]);

  // ! In this case, useEffect() is working like a componentDidUpdate() :->
  
  useEffect(() => { console.log("Rendering Ingredients")}); 

  // ! In this case, useCallback() is protecting Infinite Loop by working like shouldComponentWillUpdate() :->

  const filteredIngredientsHandler = useCallback( (filteredIngredients) =>
  {
    // setUserIngredients(filteredIngredients);
    dispatch({ type: 'SET', ingredients: filteredIngredients});
  
  }, []);
  
  const addIngredientHandler = useCallback( (ingredient) =>
  {
    // dispatchHttp({ type: 'SEND' });

    // fetch('https://understanding-react-hooks.firebaseio.com/ingredients.json',
    //   {
    //     method: 'POST',
    //     body: JSON.stringify(ingredient),
    //     headers: { 'Content-Type': 'application/json' }
    //   })
    //   .then((response) => {
    //     dispatchHttp({ type: 'RESPONSE' });
    //     return response.json();
    //   })
    //   .then((responseData) => {
    //     // setUserIngredients( (prevIngredients) => 
    //     // [
    //     //   ...prevIngredients,
    //     //   { id: responseData.name, ...ingredient }
    //     // ]);
   
    //     dispatch({ type: 'ADD', ingredient: { id: responseData.name, ...ingredient } });
    //   });

    sendRequest('https://understanding-react-hooks.firebaseio.com/ingredients.json',
      'POST',
      JSON.stringify(ingredient),
      ingredient,
      'ADD_INGREDIENT');
    
  }, [sendRequest]);

  const removeIngredientHandler = useCallback((ingredientId) =>
  {
    sendRequest(`https://understanding-react-hooks.firebaseio.com/ingredients/${ingredientId}.json`,
      'DELETE',
      null,
      ingredientId,
      'REMOVE_INGREDIENT');
  
  }, [sendRequest]);

  // & React batches State Updates :  Multiple set State are executed as one time together if called within a same function -->

  // const clearError = useCallback( () =>
  // {
  //   setError(null);
  //   setIsLoading(false);
  // }, []);

  const ingredientList = useMemo( () => { 
    return <IngredientList ingredients={userIngredients} onRemoveItem={removeIngredientHandler} />  
  }, [userIngredients, removeIngredientHandler]);

  return (
    <div className="App">
      {error && <ErrorModal onClose={clear}>{error}</ErrorModal>}
      <IngredientForm onAddIngredient={addIngredientHandler} loading={isLoading}/>
      <section>
        <Search onLoadIngredients={filteredIngredientsHandler}/>
        {ingredientList} 
      </section>
    </div>
  );
}

export default Ingredients;
