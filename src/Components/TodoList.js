import Todo from "./Todo";
const TodoList = ({ filteredTodos, deleted, setDeleted, todos, setTodos, setInputTodo, setInputText }) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map((todo) => (<Todo text={todo.text}
                    message={todo.Todo} setInputText={setInputText}
                    setInputTodo={setInputTodo} key={todo.id}
                    setDeleted={setDeleted} todo={todo}
                    todos={todos} setTodos={setTodos} />))}
            </ul>
        </div>
    )
}
export default TodoList;