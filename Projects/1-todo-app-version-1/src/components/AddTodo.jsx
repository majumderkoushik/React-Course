import React, { useRef, useState } from 'react'
import { useContext } from "react"
import { TodoItemsContext } from "../store/todo-items-store"

function AddTodo() {
  const {addNewItem} = useContext(TodoItemsContext);
  const [todoName, setTodoName] = useState();
  const [dueDate, setDueDate] = useState();
  const noOfUpdates= useRef(0);

const handleNameChange =(event) => {
 setTodoName(event.target.value);
 noOfUpdates.current +=1;
 
}
const handleDateChange =(event) => {
 setDueDate(event.target.value);
}

const handleAddButtonClicked = (event) => {
  event.preventDefault();
addNewItem(todoName,dueDate);
setDueDate("");
setTodoName("");
}
  return (
    <div class="container text-center">
    <form class="row kg-row" onSubmit={handleAddButtonClicked}>
      <div class="col-6">
        <input type='text'
         placeholder='Enter Todo Here'
         value={todoName}
         onChange={handleNameChange} />
      </div>
      <div class="col-4">
        <input
         type='date' 
         value={dueDate}
         onChange={handleDateChange} />
      </div>
      <div class="col-2">
      <button  class="btn btn-success kg-button"
      >Add</button>
      </div>
    </form>
    </div>
  )
}

export default AddTodo