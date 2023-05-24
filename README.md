# Advanced Handling , Side Effect
## Side Effect
- Side effects can include things like fetching data from an API, subscribing to events, or manipulating the DOM.
## useEffect
- The useEffect hook is used to handle side effects in functional components.
- The useEffect hook allows you to perform these side effects after the component has rendered or when certain dependencies have changed.
```js
// check /src/App.js:10
```
### How useEffect works:
1. When a component renders, React checks for the presence of useEffect.
2. If found, React remembers the callback function inside it.
3. After rendering, React invokes the callback function and performs any specified side effects.
4. If a dependency array is provided, React re-invokes the callback when the dependencies change.
5. The cleanup function returned from useEffect is executed before re-invoking the effect or when the component unmounts.

### useEffect with Dependencies
- Dependencies help in re-evelute callback function (not a re-render) when any dependencies change.
```js
// let's say we have form validation logic that change html button disable props we want to check that logic when the login inputs change.
  useEffect(() => {
    setFormIsValid(
      enteredEmail.includes('@') && enteredPassword.trim().length > 6
    );
  },[enteredEmail,enteredPassword])
```
- here ,when enteredEmail or enteredPassword state change we check form validation logic.
- if logic true => setFormValid(true).
- else nothing.

## useReducer
- use for manage complex states.
- useReducer only use for complex state mangements otherwise useState is better.
### Syntax : 
```js
import { useReducer } from 'react-dom';
const [inputState,dispetachInputFunction] = useReducer(inputReducerFunction,initialValues,initialFunction);
```
#### inputState : 
- it is latest snapshot of input values.
#### dispetachInputFunction :
- updating call Function for values and state.
#### inputReducerFunction :
- updating Function when dispetachInputFunction call
- it recieve two arguments : (prevState,action) => {};
- in action we pass anything i.e. string,object,number.
- prevState containe previous state values.
- it return new snapshot of state.
#### initialValues : 
- it initiat Values for our state variable.
#### initialFuncton : 
- it use when our Initiat Values Very Complex i.e. getting data from server.
#### example :
```js
// SEE COMMIT -->  (ADD -- emailState useReducer);
```

