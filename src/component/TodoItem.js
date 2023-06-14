import React from 'react'
import { MdDoneOutline } from "react-icons/md";
import { MdDeleteSweep } from "react-icons/md";
import './scss/TodoItem.scss'
import cn from 'classnames';

const TodoItem = ({ item, remove }) => {

  const {id, title, done} = item;

  return (
    <li className='todo-list-item'>
      <div className={cn('check-circle', {active: done})}>
        {done && <MdDoneOutline/>}
      </div>
      <span className={cn('text', {finish: done})}>{title}</span>
      <div className="remove" onClick={() => remove(id)}>
        <MdDeleteSweep/>
      </div>
    </li>
  )
}

export default TodoItem