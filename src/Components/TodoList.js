
const TodoList = ({inputText}) => {
    return (
        <div className="todo-container">
      <ul className="todo-list"></ul>
      <li>{inputText}</li>
    </div>
    )
}
export default TodoList;