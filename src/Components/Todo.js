
const Todo = ({ text, todo, todos, setTodos, message, setInputText, setInputTodo }) => {
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id))
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
    }
    return (
        <div className="todo">
            <li onClick={editTodo} className={`todo-item ${todo.completed ? "completed" : " "}`}>{text}{":   "}{message}</li>
            <button onClick={completeHandler} className="complete-btn"><i className="fas fa-check"></i></button>
            <button onClick={deleteHandler} className="trash-btn"><i className="fas fa-trash"></i></button>
        </div>
    )
}
export default Todo;