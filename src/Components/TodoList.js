
import Todo from "./Todo";
const TodoList = ({ filteredTodos, todos, setTodos, setInputTodo, setInputText }) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map((todo) => (<Todo text={todo.text}
                    message={todo.Todo} setInputText={setInputText}
                    setInputTodo={setInputTodo} key={todo.id}
                    todo={todo} todos={todos} setTodos={setTodos} />))}
            </ul>
        </div>
    )
}
export default TodoList;