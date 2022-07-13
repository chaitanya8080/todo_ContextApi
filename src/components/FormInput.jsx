


import React from 'react'
import {useState, useContext} from "react"
import { DataContext } from './DataProvider'

function FormInput() {
  
  const [input, setInput] = useState("")
  const [todos, setTodos] = useContext(DataContext)

  const handleTodo = (e)=>{
    e.preventDefault()
    setTodos([...todos, {name:input, complete:false}]);
    setInput('');
  }
 
  return (
    <div>
        <form autoComplete='off' onSubmit={handleTodo}>
        <input type="text" name='todos' id='todos' placeholder='write'
          value={input}
         onChange={(e)=>setInput(e.target.value)}
        />
        <button type='submit'>Create</button>
      </form>
    </div>
  )
}

export default FormInput