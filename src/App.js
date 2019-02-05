
import React, { useState } from 'react';


function Todo({ todo, index }) {
  return (<div className='todo'>{todo.text}</div>)

}


function App() {
  // eslint-disable-next-line
  const [todos, setTodos] = useState([
    {
      text: 'learn about react',
      isCompleted: false
    },
    {
      text: 'Meet friend for lunch',
      isCompleted: false
    },
    {
      text: 'Put gas In car',
      isCompleted: false
    }

  ]);


  return (

    <div className='app'>
      <div className='todo-list'>
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} />
        ))}
      </div>
    </div>
  )


}

export default App;
