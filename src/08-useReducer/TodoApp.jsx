import React, { useReducer } from 'react'
import { todoReducer } from './todoReducer'
import { TodoList } from './componentes/TodoList'
import { TodoAdd } from './componentes/TodoAdd'

const initialState = [{
    id: new Date().getTime(),
    description: 'Recolectar la piedra del Alma',
    done: false,
},{
    id: new Date().getTime() * 3,
    description: 'Recolectar la piedra del Tiempo',
    done: false,
}]

export const TodoApp = () => {

    const [ todos, dispatchTodo] = useReducer( todoReducer, initialState )

    const handleSubmint = ( newTodo ) =>{
        dispatchTodo()
    }

  return (
    <div>
        <h1>TodoApp: 10, <small>pendientes: 2</small></h1>
        <hr />


        <div className='row'>
            <div className='col-7'>
                <TodoList todos={ todos }/>
            </div>

            <div className='col-5'>
                <h4>Agregar TODO</h4>
                <hr />

                <TodoAdd handleSubmint={ handleSubmint }/>
            </div>
        </div>


    </div>
  )
}
