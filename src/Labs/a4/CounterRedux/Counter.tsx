import React from "react";
import { useSelector } from "react-redux";
import { LabState } from "../store";
import { increment, decrement } from "./counterReducer";
import { useDispatch } from "react-redux";

function Counter() {
  const { count } = useSelector((store: LabState) => store.counterReducer);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment(10))}>Increment</button>
      <button onClick={() => dispatch(decrement(20))}>Decrement</button>
    </div>
  );
}

export default Counter;
