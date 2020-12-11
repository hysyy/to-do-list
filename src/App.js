import React, { useState, useEffect } from "react";
import './App.css';
import Input from "./components/Input";
import TodoList from './components/TodoList'

function App() {
  const initialList = () => JSON.parse(localStorage.getItem("todo list"));
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState(initialList);

  useEffect(() => {
    localStorage.setItem("todo list", JSON.stringify(todoList))
  }, [todoList]);

  return (
      <div className="App">
        <header>
          <h1>To-Do list</h1>
        </header>
        <Input
          input={input}
          setInput={setInput}
          todoList={todoList}
          setTodoList={setTodoList}
        />
        <TodoList
          todoList={todoList}
          setTodoList={setTodoList}
        />
      </div>
  );
}

export default App;
