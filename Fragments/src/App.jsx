import { useState } from 'react'

import './App.css'
import FoodItems from './components/FoodItems'
import ErrorMessage from './components/ErrorMessage';

function App() {
  // let foodItems=[];
  let foodItems=['Dal','Green Vegis','Milk','Roti','Salad','Ghee'];
  return (
    <>
    <div>Healthy Food</div>
    <ErrorMessage items={foodItems} />
    <FoodItems items={foodItems} />
  </>
  )
}

export default App
