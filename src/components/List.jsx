

import React from 'react'
import ListItems from './ListItems'
import {useContext} from "react"
import { DataContext } from './DataProvider';

function List() {

 const [todos, setTodos] = useContext(DataContext);
  
 const switchComplete = (id)=>{
    const newTodos = [...todos]
    newTodos.forEach((todo, index)=>{
      if(index === id){
         todo.complete = !todo.complete
      }
    })

    setTodos(newTodos); 
 }

  const handleEditTodos = (editValue, id)=>{
    const newTodos = [...todos]
    newTodos.forEach((todo, index)=>{
      if(index === id){
         todo.name = editValue
      }
    })

    setTodos(newTodos); 
  }
  
  return (
    <ul>
      
     {todos.map((todo, index)=>(
      <ListItems  todo={todo} key={index} id={index}
       checkComplete={switchComplete}
       handleEditTodos={handleEditTodos}
       ></ListItems>
     ))}
    
    </ul>
    
  )
}

export default List