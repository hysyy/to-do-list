import React from 'react'

function Todo({ text, setTodoList, todoList, todo, stat }) {


    const changeStatus = () => {
        setTodoList(todoList.map(elem => {
            if (elem.id === todo.id) {
                return {
                    ...elem, complete: !stat // switch the complete status on click
                }
            }
            return elem
        }))
    }

    const deleteTodo = () => {
        setTodoList(todoList.filter(elem => // removes the element with the same id (the one clicked)
            elem.id !== todo.id 
        ))
    };

    return (
        <>
            <p className={`todo-text${stat ? "--complete": ""}`}>{text}</p>
            <button className="todo-button--complete" onClick={changeStatus} >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 12.194v9.806h-20v-20h18.272l-1.951 2h-14.321v16h16v-5.768l2-2.038zm.904-10.027l-9.404 9.639-4.405-4.176-3.095 3.097 7.5 7.273 12.5-12.737-3.096-3.096z"/></svg>
            </button>
            <button className="todo-button--delete" onClick={deleteTodo}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
            </button>
        </>
    )
}

export default Todo;
