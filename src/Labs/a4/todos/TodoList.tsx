import { useSelector } from "react-redux";
import { LabState } from "../store";
import { setTodo, addTodo, deleteTodo } from "./todosReducer";
import { useDispatch } from "react-redux";

function TodoList() {
  const { todos, todo } = useSelector((store: LabState) => store.todosReducer);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        <li>
          <input
            onChange={(e) =>
              dispatch(setTodo({ ...todo, title: e.target.value }))
            }
            type="text"
            value={todo.title}
          />
          <button onClick={() => dispatch(addTodo(todo))}>Add</button>
        </li>
        {todos.map((todo: any, index: number) => (
          <li key={index}>
            <button onClick={() => dispatch(deleteTodo(todo.id))}>
              Delete
            </button>
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
