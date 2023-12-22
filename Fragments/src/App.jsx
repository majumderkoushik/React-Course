import { useState } from 'react'

import './App.css'
import FoodItems from './components/FoodItems'
import ErrorMessage from './components/ErrorMessage';
import Container from './components/Container';

function App() {
  // let foodItems=[];
  let foodItems=['Dal','Green Vegis','Milk','Roti','Salad','Ghee'];
  return (
    <>
    <Container>
    <div className='food-heading'>Healthy Food</div>
    <ErrorMessage items={foodItems} />
    <FoodItems items={foodItems} />

    </Container>
    
  </>
  )
}

export default App
