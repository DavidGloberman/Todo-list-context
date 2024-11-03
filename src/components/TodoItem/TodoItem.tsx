import React from "react";
import "./TodoItem.css";
import { useGlobalTodos } from "../../context/TodoContext/TodoContext";
import { Todo } from "../../types/TodoModel";
import GenericButton, {
  ButtonStyle,
} from "../shared/GenericButton/GenericButton";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const { toggleComplete, deleteTodo } = useGlobalTodos();

  return (
    <li className={"TodoItem"} onClick={() => toggleComplete(todo.id!)}>
      <span>{todo.done ? "✅" : "❌"}</span>
      <h3>{todo.todo}</h3>
      <GenericButton
        text="Delete"
        ButtonType={ButtonStyle.DANGER}
        onClick={(e) => {
          e.stopPropagation();
          deleteTodo(todo.id!);
        }}
      />
    </li>
  );
};

export default TodoItem;
