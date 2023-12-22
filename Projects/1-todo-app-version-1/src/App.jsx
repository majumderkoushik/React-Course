import { useState } from 'react'
import AppName from './components/AppName'
import AddTodo from './components/AddTodo'
import Todoitem from './components/Todoitem'

import './App.css';
import TodoItems from './components/TodoItems';


function App() {
  
  const todoItems = [{
    name:"Buy Milk",
    dueDate: "4/10/2023"
  },
{
  name:"Go to College",
  dueDate: "4/10/2023"
},
{
  name:"Like ny Github",
  dueDate: "Today"
},
];

  return (
   <center className='todo-container'>
   <AppName />
   <AddTodo />
   <TodoItems todoItems={todoItems}></TodoItems>
   
   
   </center>
  )
}

export default App
