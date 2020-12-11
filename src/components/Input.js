import React from 'react'
import { v4 as uuid } from 'uuid';

function Input({input, setInput, todoList, setTodoList}) {

    const updateInput = (e) => {
        setInput(e.target.value);
      };

    const addTodo = (e) =>{
        e.preventDefault();
        if(input.trim() === ""){ // prevents adding empty todos
            setInput("");
            return;
        } 
        setTodoList([...todoList, {text: input, complete: false, id: uuid()}]) // add new todo to the existing list
        setInput(""); // reset input field
    };

    return (
        <div className="input-container">
            <form className="input-form" onSubmit={addTodo}>
                <input className="input-field" maxLength="120" placeholder="What do you need to do today?" type="text"value={input} onChange={updateInput}></input>
                <button className="input-button" type="submit">Add</button>
            </form>
        </div>
    )
}

export default Input;
