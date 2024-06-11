import React, { useEffect, useReducer, useState } from 'react'
import { todoReducer } from '.././08-useReducer/todoReducer'

const init = () =>{
    // traer datos del localstorage, trae los todos qe hay pero si no hay, trae un arreglo vacio
    return JSON.parse( localStorage.getItem( 'todos' )) || [] ;
}


export default function useTodo() {

    const [ todos, dispatchTodo] = useReducer( todoReducer, [], init )
    // const [todosCount, setTodosCount] = useState()
    // const [pendingTodosCount, setPendingTodosCount] = useState()

    const handleSubmit = ( newTodo ) =>{
        const action = {
            type: '[TODO] Add Todo',
            payload: newTodo,
        }
        dispatchTodo( action )
    }

    const handleDeleteTodo = ( id ) =>{
        dispatchTodo({
            type: '[TODO] Remuve Todo',
            payload: id,
        })
    }

    const handleToggleTodo = ( id ) =>{
        dispatchTodo({
            type: '[TODO] Toggle Todo',
            payload: id,
        })
    }


    // guardo los todos en el local storage
    useEffect(() => {

      localStorage.setItem('todos', JSON.stringify( todos ))

    //   setTodosCount(todos.length)
    //   setPendingTodosCount(todos.filter(todo=> !todo.done).length)

    }, [todos])
    



  return {
    handleSubmit, 
    handleDeleteTodo, 
    handleToggleTodo, 
    todos,
    todosCount: todos.length,
    pendingTodosCount: (todos.filter(todo=> !todo.done).length),
  }
}
