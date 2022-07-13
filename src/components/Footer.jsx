


import React, { useState } from 'react'
import {useContext} from "react"
import { DataContext } from './DataProvider'

function Footer() {

  const [checkAll, setCheckAll]= useState(false)
  const [todos, setTodos] = useContext(DataContext)

  const handleCheckAll = ()=>{
    const newTodos = [...todos]
    newTodos.forEach((todo)=>{
      todo.complete = !checkAll
    })
    setTodos(newTodos)
    setCheckAll(!checkAll)
  }


  const deleteTodo = ()=>{
    const newTodos = todos.filter(todo =>{
      return todo.complete === false;
    })
    setTodos(newTodos);
  }
  return (
    <div className='row'>
    <label htmlFor='all' >
      <input type="checkbox" name='all' id=''
      onClick={handleCheckAll}
      checked={checkAll}
      />
      All
    </label>
    <p>You have {todos.length} todo</p>
    <button id='delete' onClick={deleteTodo}>Delete</button>
  </div>
  )
}

export default Footer