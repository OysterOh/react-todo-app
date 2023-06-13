import React from 'react'
import { MdDoneOutline } from "react-icons/md";
import { MdDeleteSweep } from "react-icons/md";
import './scss/TodoItem.scss'
const TodoItem = () => {
  return (
    <li className='todo-list-item'>
        <div className='check-circle'>
        <MdDoneOutline/>
        </div>
        <span className='text'>할 일들</span>
        <div className='remove'><MdDeleteSweep/></div>
    </li>
  )
}

export default TodoItem