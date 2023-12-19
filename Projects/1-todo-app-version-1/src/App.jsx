import { useState } from 'react'
import AppName from './components/AppName'
import AddTodo from './components/AddTodo'
import Todoitem1 from './components/Todoitem1'
import Todoitem2 from './components/TodoItem2'
import './App.css';


function App() {
  

  return (
   <center className='todo-container'>
   <AppName />
   <AddTodo />
   <div className='items-container'>
   <Todoitem1 />
   <Todoitem2 />
   </div>
   
   </center>
  )
}

export default App
