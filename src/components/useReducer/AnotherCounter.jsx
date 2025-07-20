import { useState, useReducer } from "react";
import { counterReducer, initialState } from "./CounterUtility";
const AnotherCounter = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  const [payload, setPayload] = useState("");
  return (
    <div>
      <h1>{state.count}</h1>
      <input
        type="number"
        value={payload}
        onChange={(e) => setPayload(+e.target.value)}
      />
      <button onClick={() => dispatch({ type: "add" })}>Add</button>
      <button onClick={() => dispatch({ type: "substract" })}>Substract</button>
      <button onClick={() => dispatch({ type: "addByAmount", payload })}>
        Add Input
      </button>
      <button
        onClick={() => {
          dispatch({ type: "substractByAmount", payload });
        }}
      >
        Substract Input
      </button>
    </div>
  );
};

export default AnotherCounter;
