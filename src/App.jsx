import { useState, useRef } from 'react'
import { v4 as uuidv4 } from "uuid"
import './App.css'
import Header from "./Header"
import Task from "./Task"

function App() {

  // State for tasks.
  const [tasks, setTasks] = useState([])

  const sidebar = useRef(null)

  
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


  // Handler callback function for saving an edited task in state. Edited task data passed up from child component.
  const handleSave = (editedObject) => {
    setTasks((prevTasks) => prevTasks.map((current) => {
      return current.id === editedObject.id ? 
             { ...current, objective: editedObject.objective, edit: false }
             : current
    }))
  }


  // Handler function for adding a new task to state. Task recieved from child component with onSubmit prop.
  const handleAddTask = (task) => {
    if (task === "" ) {
      alert("Please write a task.")
      return
    }
    const newId = uuidv4()
    const newTaskObject = {id: newId, objective: task, edit: false, complete: false}
    
    setTasks([...tasks, newTaskObject])
  }


  const toggleComplete = (id) => {
    setTasks((prevTasks) => prevTasks.map((current) => {
      return current.id === id ?
        { ...current, complete: !current.complete }
        : current
    }))
  }


  return (
    <div className="main-container">

      <div className="sidebar" ref={sidebar}>
      </div>
      <Header onSubmit={handleAddTask}/>
        {tasks.map((taskObj, index) => {
          return <Task key={taskObj.id}
                       number={index + 1}
                       taskObj={taskObj}
                       handleDelete={()=>deleteTask(taskObj.id)}
                       handleEdit={()=>handleEdit(taskObj.id)}
                       toggleComplete={()=>toggleComplete(taskObj.id)}
                       onSubmit={handleSave}
                  />
        })}
    </div>
  )
}

export default App