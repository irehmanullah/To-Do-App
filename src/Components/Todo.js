const Todo = ({ todo, todos, setTodos, setInputText, setInputTodo }) => {

    const deleteHandler = () => {
        if (window.confirm("Do you want to delete that todo?")) {
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
        setInputText(todo.text);
        setInputTodo(todo.Todo);
        setTodos(todos.filter((el) => el.id !== todo.id))
    }

    return (
        <div className="todo">
            <li onClick={editTodo} className={`todo-item ${todo.completed ? "completed" : " "}`}>
                <div style={{ fontWeight: 'bold' }}>{todo.text}{": "}</div>
                <div>{todo.Todo}</div>
                {/* {todo.text}{": "}{todo.Todo} */}
            </li>
            <button onClick={completeHandler} className="complete-btn"><i className="fas fa-check"></i></button>
            <button onClick={deleteHandler} className="trash-btn"><i className="fas fa-trash"></i></button>
        </div>
    )
}
export default Todo;