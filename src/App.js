import React, {useState} from 'react'
import TodoList from './TodoList'


function App() {
  const [todos,setTodos] = useState(['Todo1', 'Todo 2'])
  return (
    <>
    <TodoList todos = {todos}/>
    <input type = "type" />
    <button>Add Todo</button>
    <button>CLear Complete</button>
    <div>0 letft to do</div>
    </>
  )
}

export default App;
