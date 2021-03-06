import React from "react";
import styled from "styled-components";
import { useTodoState } from "components/Todo/TodoContext";
import TodoItem from "components/Todo/TodoItem";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

const TodoList = () => {
  const todos = useTodoState();
  const todoList = todos.map((todo) => (
    <TodoItem
      key={todo.id}
      id={todo.id}
      text={todo.text}
      isDone={todo.isDone}
    />
  ));

  return <TodoListBlock>{todoList}</TodoListBlock>;
};

export default TodoList;
