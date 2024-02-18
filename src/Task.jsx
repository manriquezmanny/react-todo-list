import { useState, useRef } from 'react'

function Task(props) {

    const [ toEdit, setToEdit ] = useState(props.taskObj)
    const editInputElement = useRef(null)

    const handleChange = (e) => {
        const editInputValue = e.target.value
        setToEdit((prev) => {
            return { ...prev, objective: editInputValue }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.onSubmit(toEdit)
        editInputElement.current.value = ""
    }

    return(
        <div className="task">
            <h3>{props.number}.</h3>
            <form id="edit-form" className="task-form" onSubmit={handleSubmit}>
                {props.taskObj.edit ? 
                <label>Edit: <input ref={editInputElement} onChange={handleChange} type="text" className="edit-input" defaultValue={props.taskObj.objective} id="edit-input" autoFocus/></label>
                :
                <button type="button" style={{ textDecoration: props.taskObj.complete ? "line-through": "none" }} className="objective-text" onClick={props.toggleComplete}>{props.taskObj.objective}</button>
                }
                <div>
                    {props.taskObj.edit ?
                        <div className="task-btns">
                            <div><button className="save-btn">Save <i className="bi bi-check2"></i></button></div>
                            <button type="button" className="delete-btn" onClick={props.handleDelete}>Delete <i className="bi bi-trash"></i></button>
                        </div>
                        :
                        <div className="task-btns">
                            <button type="button" className="edit-btn" onClick={props.handleEdit}>Edit <i className="bi bi-pencil"></i></button>
                            <button type="button" className="delete-btn" onClick={props.handleDelete}>Delete <i className="bi bi-trash"></i></button>
                        </div>
                    }
                </div>
            </form>
        </div>
    )
}

export default Task