import { useReducer, useCallback } from 'react';

const initialState =
{
  loading: false,
  error: null,
  data: null,
  extra: null,
  identifier: null
};

const httpReducer = (state, action) =>
{
  switch (action.type)
  {
    case 'SEND': return { loading: true, error: null, data: null, extra: null, identifier: action.identifier };

    case 'RESPONSE': return { ...state, loading: false, data: action.responseData, extra: action.extra };
      
    case 'ERROR': return { loading: false, error: action.errorMessage };
    
    case 'CLEAR': return initialState;
    
    default: throw new Error("Should Not Get There");    
  }
}

const useHttp = () =>
{
  const [httpState, dispatchHttp] = useReducer( httpReducer, initialState );
  
  const clear = useCallback(() => dispatchHttp({ type: 'CLEAR' }), []);

  const sendRequest = useCallback( (url, method, body, requestExtra, requestIdentifier) =>
  {
    dispatchHttp({ type: 'SEND', identifier: requestIdentifier });

    fetch( url,
      {
        method: method,
        body: body,
        headers: { 'Content-Type': 'application/json' }
      })
      .then( (response) => {
        return response.json();
      })
      .then( (responseData) =>  {
        dispatchHttp({ type: 'RESPONSE', responseData: responseData, extra: requestExtra });
      })
      .catch( (error) => 
      {
        // setError("Something went wrong");
        // setIsLoading(false);
        dispatchHttp({ type: 'ERROR', errorMessage: "Something went wrong"});
      });
  }, []);  

  return {
    isLoading: httpState.loading,
    data: httpState.data,
    error: httpState.error,
    sendRequest: sendRequest,
    requestExtra: httpState.extra,
    requestIdentifier: httpState.identifier,
    clear: clear
  }
}

export default useHttp;