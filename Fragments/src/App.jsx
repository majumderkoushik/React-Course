import { useState } from 'react'
import './App.css'
import FoodItems from './components/FoodItems'
import ErrorMessage from './components/ErrorMessage';
import Container from './components/Container';
import FoodInput from './components/FoodInput';

function App() {
  // let foodItems=[];
  


  let [foodItems, setFoodItems] = useState([]);
 
  const onKeyDown = (event) => {
    if(event.key=== 'Enter') {
      let newFoodItem= event.target.value;
      let newItems= [...foodItems , newFoodItem];
      setFoodItems(newItems)
      console.log(newFoodItem);
    }
         
     }
  return (
    <>
    <Container>
    <div className='food-heading'>Healthy Food</div>
    
    
    <FoodInput handleKeyDown={onKeyDown} />
    <ErrorMessage items={foodItems} />
 
    <FoodItems items={foodItems} />

    </Container>
   
    
  </>
  )
}

export default App
