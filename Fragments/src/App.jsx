import { useState } from 'react'

import './App.css'

function App() {
  // let foodItems=[];
  let foodItems=['Dal','Green Vegis','Milk','Roti','Salad','Ghee'];
  

  

  return (
    <>
    <div>Healthy Food</div>
    {foodItems.length ===0 && 'I am still hungry' }
    <ul className="list-group">
    {foodItems.map((item) =>(
      <li key={item} className="list-group-item">{item}</li>
      ))}
  
  
</ul>
</>
  )
}

export default App
