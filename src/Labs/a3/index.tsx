import Add from "./Add";
import Highlight from "./Highlight";
import JavaScript from "./JavaScript";
import PathParameters from "./routing/PathParameters";
import Styles from "./Styles";
import TodoItem from "./todos/TodoItem";
import TodoList from "./todos/TodoList";

function Assignment3() {
  return (
    <div>
      <h2>Assignment 3</h2>
      <TodoList />
      <ul className="list-group">
        <TodoItem />
        <TodoItem
          todo={{ done: false, title: "Buy bread", status: "IN PROGRESS" }}
        />
        <TodoItem
          todo={{ done: true, title: "Feed dogs", status: "COMPLETED" }}
        />
      </ul>
      <Add a={2} b={4} />
      {Add({ a: 1, b: 2 })}
      Lorem ipsum <Highlight>dolor sit amet</Highlight>, consectetur adipiscing
      elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis
      vulputate commodo lectus,
      <Styles />
      <PathParameters />
      <JavaScript />
    </div>
  );
}

export default Assignment3;
