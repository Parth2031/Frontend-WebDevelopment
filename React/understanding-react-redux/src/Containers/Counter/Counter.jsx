import React, { Component } from 'react';

// ! connect() is a Function that returns a Higher Order Component  which connects React Components to Redux Store.
import { connect } from 'react-redux';

import CounterControl from '../../Components/Counter Control/CounterControl';
import CounterOutput from '../../Components/Counter Output/CounterOutput';
import * as actionTypes from '../../Store/Actions';

class Counter extends Component
{
  state = {
    counter: 0
  }

  counterChangedHandler = (action, value) =>
  {
    switch (action)
    {
      case 'inc': this.setState((prevState) => { return { counter: prevState.counter + 1 } })
                  break;
      case 'dec': this.setState((prevState) => { return { counter: prevState.counter - 1 } })
                  break;
      case 'add': this.setState((prevState) => { return { counter: prevState.counter + value } })
                  break;
      case 'sub': this.setState((prevState) => { return { counter: prevState.counter - value } })
                  break;
      default: break;            
    }
  }

  // * NOTE :- Now, we no longer access this.state.properties but now the Property set by mapStateToProps() is used for State Management.
  // ! So, Now changing from "this.state.counter" to, we are accessing "this.props.property_set_by_mapStateToProps".

  // ? Similary, in mapDispatchToProps(), we set the Dispatch Actions by a different function in it.  
  // ? So, Now changing from "() => this.counterChangedHandler('inc')" to, we are accessing "this.props.property_functionname".
  // ? Similarly, for all other functions.

  render()
  {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
        <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
        <CounterControl label="Add 10" clicked={this.props.onAddCounter} />
        <CounterControl label="Subtract 15" clicked={this.props.onSubtractCounter} />
        <hr />
        <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
        <ul>
          { this.props.storedResults.map( strResult => (
              <li key={strResult.id} onClick={() => this.props.onDeleteResult(strResult.id)}>{strResult.value}</li>
          ))}
        </ul> 
      </div>
    );
  }
}

// ! Defining connect() Parameters which are used to Dispatch Actions - 

// * State is recieved from the React Redux bu Reducer Component in mapStateToProps() :

const mapStateToProps = (state) =>
{
  return {
    ctr: state.ctr.counter,
    storedResults: state.res.results
  };
};

// * Dispatching Actions from Reducer as Props

const mapDispatchToProps = (dispatch) =>
{
  return {
    onIncrementCounter: () => dispatch({ type: actionTypes.INCREMENT }),
    onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT }),
    onAddCounter: () => dispatch({ type: actionTypes.ADD, value: 10 }),
    onSubtractCounter: () => dispatch({ type: actionTypes.SUBTRACT, value: 15 }),
    onStoreResult: (result) => dispatch({ type: actionTypes.STORE_RESULT, result: result }),
    onDeleteResult: (id) => dispatch({ type: actionTypes.DELETE_RESULT, resultElementId: id })
  };
};

// ! connect(parameters in a set order) is a function that returns a Higher Order Component.

export default connect(mapStateToProps, mapDispatchToProps)(Counter); 