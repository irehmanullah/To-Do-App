
const Form = ({ setInputText, inputText, todos, setTodos, setStatus, setInputTodo, inputTodo }) => {
    const changeHandler = (e) => {
        setInputText(e.target.value)
    }
    const todoChangeHandler = (e) => {
        setInputTodo(e.target.value)
    }
    const submitTodoHandler = (e) => {
        e.preventDefault();
        if (inputText !== "" || inputTodo !== "") {
            setTodos([
                ...todos, { text: inputText, Todo: inputTodo, completed: false, id: Math.random() }
            ])
        }else{
        alert("Please Enter Todo")
        }
        setInputText("")
        setInputTodo("")
    }
    const statusHandler = (e) => {
        console.log(e.target.value);
        setStatus(e.target.value);
    }
    return (
        <form>
            <input type="text" value={inputText} className="todo-input" onChange={changeHandler} placeholder="Title" required />
            <input type="text" value={inputTodo} className="select" onChange={todoChangeHandler} placeholder="Todo" required />
            <button className="todo-button" type="submit" onClick={submitTodoHandler}>
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    )
}
export default Form;