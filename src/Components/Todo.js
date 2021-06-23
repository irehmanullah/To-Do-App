
const Todo = ({ text, todo, todos, setTodos, key, message, setInputText, setInputTodo }) => {
    const deleteHandler = () => {
        if(window.confirm("Do you want to delete that todo?")){
        setTodos(todos.filter((el) => el.id !== todo.id))
        }
    }
    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if (item.id === todo.id) {
                return { ...item, completed: !item.completed }
            }
            return item;
        }))
    }
    const editTodo = () => {
        setInputText(text);
        setInputTodo(message);
                setTodos(todos.filter((el) => el.id !== todo.id))
    }
    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : " "}`}>{text}{": "}{message}</li>
            <button onClick={editTodo} className="edit-btn"><i className="fas fa-edit"></i></button>
            <button onClick={completeHandler} className="complete-btn"><i className="fas fa-check"></i></button>
            <button onClick={deleteHandler} className="trash-btn"><i className="fas fa-trash"></i></button>
        </div>
    )
}
export default Todo;