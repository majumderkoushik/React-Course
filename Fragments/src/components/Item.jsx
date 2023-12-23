import styles from './Item.module.css'
const Item = ({fooditem,bought,handleBuyButton}) => {
  
    // const handleBuyButtonClicked = (event) => {
    //     console.log(event);
    //     console.log(`${fooditem} being bought`)
    // }
return (
    <li className={`list-group-item kg-item ${bought && "active"}`}><span className="kg-span">{fooditem}</span>
    <button className={`${styles.button} btn btn-info`}
    onClick={handleBuyButton}
    >Buy</button></li>
)
}
export default Item;