import * as React from 'react';
import './style.css';
import { useState } from 'react';

export default function App() {
  // input
  const [newtask, setnewtask] = useState('');
  let handleinput = (e) => {
    setnewtask(e.target.value);
  };

  // todo-list
  const [todolist, settodolist] = useState([]);
  let handleclick = () => {
    let task = {
      id: todolist.length + 1,
      taskname: newtask,
      completed: false,
    };
    settodolist([...todolist, task]);
  };
  console.log(todolist);

  // delete function
  let handledelete = (id) => {
    let newlist = todolist.filter((to) => (to.id === id ? false : true));
    settodolist(newlist);
  };

  // done function
  let handledone = (id) => {
    let donelist = todolist.map((to) =>
      to.id === id ? { ...to, completed: true } : to
    );
    settodolist(donelist);
  };

  return (
    <div id="todolist">
      <input type="text" onChange={handleinput} />
      <button onClick={handleclick}>Add task</button>
      <ul>
        {todolist.map((todo) => {
          return (
            <li>
              <span
                style={{
                  textDecoration: todo.completed ? 'line-through' : 'none',
                }}
              >
                {todo.taskname}
              </span>
              &nbsp;&nbsp;
              <button id="del" onClick={() => handledelete(todo.id)}>
                Delete
              </button>
              &nbsp;
              <button
                id="done"
                onClick={() => {
                  handledone(todo.id);
                }}
              >
                Done
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
