// TODO:: Understanding Redux Work Flow using Node JS :-
// ~ In Order to execute Redux using Node, we use Terminal Command: node filename.js

const redux = require('redux');
const createStore = redux.createStore;

const intialState = {
  counter: 0
}

// ! Reducers -

const rootreducer = (state = intialState, action) =>
{
  // & We can never mutate the State or change it's originality.

  if (action.type === 'INC_COUNTER')
  {
    return {
      ...state,
      counter: state.counter + 1 
    };
  }  

  if (action.type === 'ADD_COUNTER')
  {
    return {
      ...state,
      counter: state.counter + action.value
    };
  }  

  return state;
};

// ! Central Store (Store) -

const store = createStore(rootreducer);
console.log(store.getState());

// ! Subscription -
// & It runs everytime whenever the Action is dispatched and mutates/updates the Store. 

store.subscribe( () => {
  console.log("Subscription:", store.getState());
});

// ! Dispatching Action -
// * NOTE :- Dispatch function must have a "type" property and except that it can various other properties if needed.

store.dispatch({ type: 'INC_COUNTER' });
store.dispatch({ type: 'ADD_COUNTER', value: 10 });
console.log(store.getState());

