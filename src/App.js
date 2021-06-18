import './App.css';
import Form from './Components/Form';
import TodoList from './Components/TodoList';
import { useState } from 'react';
function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const[filteredTodos, setFilteredTodos] =useState([]);
  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText} setStatus={setStatus}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
