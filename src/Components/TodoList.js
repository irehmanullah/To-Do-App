import Todo from "./Todo";

const TodoList = ({ filteredTodos, todos, setTodos, setInputTodo, setInputText }) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map((todo) => (
                    <Todo
                        key={todo.id}
                        setInputText={setInputText}
                        setInputTodo={setInputTodo}
                        todo={todo}
                        todos={todos}
                        setTodos={setTodos} />
                ))}
            </ul>
        </div>
    )
}

export default TodoList;
