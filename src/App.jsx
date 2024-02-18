import { useState, useRef } from 'react'
import { v4 as uuidv4 } from "uuid"
import './App.css'
import Header from "./Header"
import Task from "./Task"

function App() {

  // State for tasks.
  const [tasks, setTasks] = useState([])

  
  // Handler function for deleting a task from state.
  function deleteTask(id) {
    setTasks((prevTasks) => prevTasks.filter((current) => current.id != id))
  }


  // Handler function for editing a task in state.
  function handleEdit(id) {
    setTasks((prevTasks) => prevTasks.map((current) => {
      return current.id === id ? { ...current, edit: true }: current
    }))
  }


  // Handler function for saving an edited task in state.
  const handleSave = (editedObject) => {
    setTasks((prevTasks) => prevTasks.map((current) => {
      return current.id === editedObject.id ? 
             { ...current, objective: editedObject.objective, edit: false }
             : current
    }))
  }


  // Handler function for adding a new task to state.
  const handleAddTask = (task) => {
    if (task === "" ) {
      alert("Please write a task.")
      return
    }
    const newId = uuidv4()
    const newTaskObject = {id: newId, objective: task, edit: false}
    
    setTasks([...tasks, newTaskObject])
  }


  return (
    <div className="list-container">
      <Header onSubmit={handleAddTask}/>

      <div className="list-body">
        {tasks.map((taskObj, index) => {
          return <Task key={taskObj.id}
                       number={index + 1}
                       taskObj={taskObj}
                       handleDelete={()=>deleteTask(taskObj.id)}
                       handleEdit={()=>handleEdit(taskObj.id)}
                       onSubmit={handleSave}
                  />
        })}
      </div>
    </div>
  )
}

export default App