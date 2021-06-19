
const Form = ({ setInputText, inputText, todos, setTodos, setStatus }) => {
    const changeHandler = (e) => {
        setInputText(e.target.value)
    }
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, { text: inputText, completed: false, id: Math.random() }
        ])
        setInputText("")
    }
    const statusHandler=(e)=>{
        console.log(e.target.value);
        setStatus(e.target.value);
    }
    return (
        <form>
            <input type="text" value={inputText} className="todo-input" onChange={changeHandler} placeholder="Title" required/>
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