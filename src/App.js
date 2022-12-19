import {useState} from 'react';
import TodoForm from './components/TodoForm'
import './App.css';
import TodoItems from './components/TodoItems';

function App() {
  const [ todoList, setTodoList ] = useState([]);
  return (
    <div className="App">
      <TodoForm todoList={todoList} setTodoList={setTodoList}/>
      <TodoItems todoList={todoList} setTodoList={setTodoList}/>
    </div>
  );
}

export default App;
