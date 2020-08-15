// TODO:: Some Important Notes Regarding useSelector() & useDispatch() part of React Redux Library functionality :-

// ! useDispatch() is an alternative to Redux Store Dispatch function.
// ? useSelector() is an alternative used to convert mapStateToProps() of Redux Store to Dispatch method without using connect Component.    

import React, { useState, useEffect, useRef } from 'react';

import Card from '../UI/Card';
import useHttp from '../../Custom Hooks/Http';
import ErrorModal from '../UI/ErrorModal';
import './Search.css';

const Search = React.memo( (props) =>
{
  const { onLoadIngredients } = props;
  const [enteredFilter, setEnteredFilter] = useState('');
  const { isLoading, data, error, sendRequest, clear } = useHttp();

  const inputRef = useRef(); 

  // * We can also useEffect() for Cleaning Up function by returning something, as Http Request tends to use re-render after every 
  // * keystroke acting as updating state so to avoid this, we used Cleaning Up technique.

  useEffect( () =>
  {
    const timer = setTimeout( () =>
    {
      if (enteredFilter === inputRef.current.value)
      {
        const query = enteredFilter.length === 0 ? '' : `?orderBy="title"&equalTo="${enteredFilter}"`;
        sendRequest('https://understanding-react-hooks.firebaseio.com/ingredients.json' + query, 'GET');
      }
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  
  }, [enteredFilter, onLoadIngredients, inputRef, sendRequest]);

  useEffect( () =>
  {
    if (!isLoading && !error && data)
    {
      const loadedIngredients = [];
    
      for (const key in data)
      {
        loadedIngredients.push(
        {
          id: key,
          title: data[key].title,
          amount: data[key].amount
        });
      }
      
      onLoadIngredients(loadedIngredients);
    }
  }, [data, isLoading, error, onLoadIngredients]);

  return (
    <section className="search">
      {error && <ErrorModal onClose={clear}>{error}</ErrorModal>}
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          {isLoading && <span>Loading...</span>}
          <input ref={inputRef} type="text" value={enteredFilter} onChange={ (event) => setEnteredFilter(event.target.value) }/>
        </div>
      </Card>
    </section>
  );
});

export default Search;
