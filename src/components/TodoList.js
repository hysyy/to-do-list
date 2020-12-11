import React from 'react';
import Todo from "./Todo";

function TodoList({todoList, setTodoList}) {
    return (
        <div className="list-container">
            <ul className="todo-list">
                {todoList.map(todo =>(
                    <li className="todo-item"><Todo 
                            key={todo.id}
                            todo={todo} 
                            stat={todo.complete}  
                            text={todo.text} 
                            todoList={todoList} 
                            setTodoList={setTodoList}
                         />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList;
