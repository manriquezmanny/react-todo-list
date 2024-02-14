import { useState } from 'react'
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
      return current.id === id ? {...current, edit: true}: current
    }))
  }


  // Handler function for saving an edited task in state.
  function handleSave(id){
    setTasks((prevTasks) => prevTasks.map((current) => {
      return current.id === id ? 
             {...current, objective: document.getElementById("edit-input").value, edit: false}
             : current
    }))
  }


  // Handler function for adding a new task to state.
  function handleAddTask(event){
    event.preventDefault()
    const addTaskInput = document.getElementById("objective")
    const newObjective = addTaskInput.value
    if (newObjective === "" ) {
      alert("Please write a task.")
      return
    }
    const newId = uuidv4()
    const newTaskObject = {id: newId, objective: newObjective, edit: false}
    
    setTasks([...tasks, newTaskObject])
    addTaskInput.value = ""
    addTaskInput.focus()
  }


  return (
    <div className="list-container">
      <Header handleAddTask={handleAddTask}/>
      <div className="list-body">
        {tasks.map((taskObj, index) => {
          return <Task key={taskObj.id}
                       id={taskObj.id}
                       number={index + 1}
                       objective={taskObj.objective}
                       edit={taskObj.edit}
                       handleDelete={()=>deleteTask(taskObj.id)}
                       handleEdit={()=>handleEdit(taskObj.id)}
                       handleSave={()=>handleSave(taskObj.id)}
                  />
        })}
      </div>
    </div>
  )
}

export default App
