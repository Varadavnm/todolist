import React, { useState } from 'react'

const NewTodo = () => {
    const [task, setTasks] = useState([]);
    const [input, setInput] = useState('');
    function addTask(){
        setTasks([...task, input]);
        setInput('');


    }
  return (
    <div>
        <h1>Task Manager</h1>
        <ul>
            {
                task.map((tasks)=>{
                    return <li>{tasks}</li>
                }
                )
            }
        </ul>
        <div>
            <input type="text" onChange={(e)=>setInput(e.target.value)} />
            <button onClick={addTask}>Submit</button>
        </div>
    </div>
  )
}

export default NewTodo