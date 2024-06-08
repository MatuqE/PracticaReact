import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = ({ todos = [] }) => {
  return (
    <div>
        <ul className='list-group'>
            <TodoItem todos={ todos }/>
        </ul>
    </div>
  )
}
