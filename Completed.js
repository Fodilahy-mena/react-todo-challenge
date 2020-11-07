import React from 'react'

function Completed({todo,toggleTodoItem, deleteTodo}) {

    return (
        <>
        
        {todo.isCompleted ? 
        <li key={todo.id}>
            <input onClick={() => toggleTodoItem(todo.id)} type="checkbox"/>
            <h3 className={todo.isCompleted ? "completed" : ""}>{todo.todoText}</h3>
            <button className="delete" onClick={() => deleteTodo(todo.id)}>X</button>
        </li> : ''}
        </>
    )
}

export default Completed