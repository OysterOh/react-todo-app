import React from 'react'
import TodoHeader from './TodoHeader';
import TodoMain from './TodoMain';
import TodoInput from './TodoInput';
import './scss/TodoTemplate.scss'

const TodoTemplate = () => {

  //서버에 할 일 목록(json)을 요청(fetch)해서 받아와야 한다.
  const todos = [
    {
      id: 1,
      title: '아침 산책',
      done: false
    },
    {
      id: 2,
      title: '점심 산책',
      done: true
    },
    {
      id: 3,
      title: '저녁 산책',
      done: true
    },
    {
      id: 4,
      title: '아침 운동',
      done: false
    },
    {
      id: 5,
      title: '저녁 운동',
      done: true
    }
  ];

  return (
    <div className='TodoTemplate'>
        <TodoHeader />
        <TodoMain todoList={todos}/>
        <TodoInput />
    </div>
  );

}

export default TodoTemplate