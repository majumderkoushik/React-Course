import { useState } from 'react';
import Item from './Item';
const FoodItems = ({items}) => {
  const [activeItems, setActiveItems] = useState([]);

  let onBuyButton = (item, event) => {
   let newItems= [...activeItems, item];
   setActiveItems(newItems)
  }
    return (
        <ul className="list-group">
        {items.map((item) =>(
          <Item key={item}
           fooditem ={item} 
           bought={activeItems.includes(item)} 
          handleBuyButton={(event) =>onBuyButton(item , event)} 
          
          ></Item>
          ))}
    </ul>   
    )

}

export default FoodItems;