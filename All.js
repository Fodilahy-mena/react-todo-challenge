import React from 'react'

function All({todo,toggleTodoItem}) {
    
    
    return (

        <li key={todo.id}>
            <input onClick={() => toggleTodoItem(todo.id)} type="checkbox"/>
            <h3 className={todo.isCompleted ? "completed" : ""}>{todo.todoText}</h3>
        </li>
    )
}

export default All