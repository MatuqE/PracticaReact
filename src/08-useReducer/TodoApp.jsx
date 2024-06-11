import React, { act, useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer'
import { TodoList } from './componentes/TodoList'
import { TodoAdd } from './componentes/TodoAdd'
import useTodo from '../hooks/useTodo'




export const TodoApp = () => {

  const { handleSubmit, handleDeleteTodo, handleToggleTodo, todos, todosCount, pendingTodosCount } = useTodo()
    

  return (
    <div>
        <h1>TodoApp: { todosCount }, <small>pendientes: { pendingTodosCount }</small></h1>
        <hr />


        <div className='row'>
            <div className='col-7'>
                <TodoList todos={ todos } onDeleteTodo={ handleDeleteTodo } onToggleTodo={ handleToggleTodo }/>
            </div>

            <div className='col-5'>
                <h4>Agregar TODO</h4>
                <hr />

                <TodoAdd handleSubmit={ handleSubmit }/>
            </div>
        </div>


    </div>
  )
}
