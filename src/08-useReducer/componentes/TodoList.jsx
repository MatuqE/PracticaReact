import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = ({ todos = [], onDeleteTodo, onToggleTodo }) => {
  return (
    <div>
        <ul className='list-group'>
            <TodoItem todos={ todos } onDeleteTodo={ onDeleteTodo } onToggleTodo={ onToggleTodo }/>
        </ul>
    </div>
  )
}
