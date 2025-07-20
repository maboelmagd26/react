import { useReducer } from "react";
const Counter = () => {
  const initialState = { count: 0 };
  const reducer = (state, action) => {
    console.log(state, action);
    switch (action.type) {
      case "increment":
        return { ...state, count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      case "reset":
        return { ...state, count: 0 };
      case "double":
        return { ...state, count: state.count * 2 };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>Count is {state.count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>Add</button>
      <button onClick={() => dispatch({ type: "decrement" })}>substract</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <button onClick={() => dispatch({ type: "double" })}>doubled</button>
    </div>
  );
};

export default Counter;
