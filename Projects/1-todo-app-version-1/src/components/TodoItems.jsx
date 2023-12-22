import Todoitem from "./Todoitem"
import styles from './TodoItems.module.css'

const TodoItems = ({todoItems}) => {
    return (
        <>
        <div className={styles.itemsContainer}>
        {todoItems.map (item => <Todoitem todoDate={item.dueDate} todoName={item.name}/>)}
        </div>
        </>
    )
}
export default TodoItems