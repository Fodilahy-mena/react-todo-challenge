import React, {useState, useRef, useEffect} from 'react'
import {Switch, Route} from 'react-router-dom'
import Header from './Header'
import All from './All'
import Active from './Active'
import Completed from './Completed'
function App() {
    const [inputValue, setInputValue] = useState('');
    const [todos, setTodos] = useState([])
    const inputRef = useRef(null);

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    const addNewTodo = () => {
        setTodos([
            ...todos,
            {
                id: Date.now(),
                todoText: inputValue,
                isCompleted: false,
            }
        ]);
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue === '') return;
        addNewTodo();
        setInputValue('')
        inputRef.current.focus();
        // const {todos} = setTodos();
        // localStorage.setItem("todos", todos)
        
    }

    // useEffect(() => {
    //     const todos = localStorage.getItem("todos");
    //     setTodos({todos})
    // })

    const toggleTodoItem = todoItemId => {
        const updatedTodos = todos.map(todoItem => {
          return todoItem.id === todoItemId
            ? { ...todoItem, isCompleted: !todoItem.isCompleted }
            : todoItem;
        });
        setTodos(updatedTodos);
      };

      const deleteTodo = (idToDelete) => {
          const todoToDelete =todos.filter(todo => todo.id !== idToDelete);
          setTodos(todoToDelete);
      }

      const deleteAllTodos = () => {
        setTodos([]);
      }
    
    return (
        <>
            <h1>React todo challenge</h1>
            <Header/>
            <form onSubmit={handleSubmit}>
                <input type="text" ref={inputRef} name="todo" value={inputValue} onChange={handleChange} placeholder="Add your todo list" required/> 
                <button type="submit">Add</button>
            </form>
            <nav>
                <ul>
                <button className="deleteAll" onClick={deleteAllTodos}>Delete all</button>
                    {todos.map(todo => (
                        <Switch key={todo.id}>
                            <Route key={todo.id} exact path="/">
                                <All key={todo.id} toggleTodoItem={toggleTodoItem} todo={todo}/>
                            </Route>
                            <Route key={todo.id} path="/active">
                                <Active key={todo.id} toggleTodoItem={toggleTodoItem} todo={todo}/>
                            </Route>
                            <Route key={todo.id} path="/completed">
                                <Completed key={todo.id} deleteTodo={deleteTodo} toggleTodoItem={toggleTodoItem} todo={todo}/>
                            </Route>
                        </Switch>
                        
                    ))}
                </ul>
            </nav>
        </>
    )
}

export default App