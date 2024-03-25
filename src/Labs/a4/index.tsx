import HelloWorld from "./HelloWorld";
import LifeIsGood from "./LifeIsGood";

import React, { useState } from "react";
import Counter from "./CounterRedux/Counter";
import TodoList from "./todos/TodoList";
function Assignment4() {
  const [message, setMessage] = useState("Hello World");

  return (
    <div>
      <h2>Assignment 4</h2>
      <TodoList />
      <Counter />
      <HelloWorld />
      <LifeIsGood />
    </div>
  );
}

export default Assignment4;
