import './App.css';
import Form from './Components/Form';
import TodoList from './Components/TodoList';
import Todo from './Components/Todo';
import { useState, useEffect } from 'react';
function App() {
  const [inputText, setInputText] = useState("");
  const [inputTodo, setInputTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [deleted, setDeleted] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  useEffect(() => {
    getLocalTodos();
  }, [])
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status])
  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      case 'deleted':
        setFilteredTodos(deleted);
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  }
  return (
    <div className="App">
      <header>
        <h1>My Todo List</h1>
      </header>
      <Form todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}
        inputTodo={inputTodo}
        setInputTodo={setInputTodo}
      />
      <TodoList filteredTodos={filteredTodos}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setInputTodo={setInputTodo}
        setDeleted={setDeleted}
        deleted={deleted}
      />
    </div>
  );
}

export default App;
