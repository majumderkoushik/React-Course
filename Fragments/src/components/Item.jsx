import '../App.css'
const Item = ({fooditem}) => {
   
return (
    <li  className="list-group-item kg-item"><span className="kg-span">{fooditem}</span></li>
)
}
export default Item;