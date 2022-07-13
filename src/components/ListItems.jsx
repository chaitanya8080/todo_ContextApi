


import React, { useState } from 'react'

function ListItems({
    todo,
    id,
    checkComplete ,
    handleEditTodos
}){

    const [onEdit, setOnEdit] = useState(false);

    const [editValue, setEditValue]= useState(todo.name)

    const handleEdit = ()=>{
        setOnEdit(true)
    }

    const handleSave = (id)=>{
        setOnEdit(false)
        if(editValue){
            handleEditTodos(editValue, id)
        }else{
            setEditValue(todo.name);
        }
    }

    if(onEdit){
        return (
            <div>
            <ul>
             <li>
          
                <input type="text" id="editValue" onChange={(e)=>setEditValue(e.target.value)}   ></input>
           
              <button onClick={()=>handleSave(id)} >Save</button>
        
            </li>
          </ul>
          </div>

          )
    }else{
        return (
            <div>
            <div> <ul>
            <li>
              <label htmlFor={id}  className={todo.complete ? "active":""} >
                <input type="checkbox" id={id} checked={todo.complete} 
                onChange={()=>checkComplete(id)} ></input>
                {todo.name}
              </label>
              <button disabled={todo.complete}  onClick={handleEdit}>Edit</button>
        
            </li>
          </ul></div>
            </div>
          )
    }
 
}

export default ListItems