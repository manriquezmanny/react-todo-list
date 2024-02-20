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
        <div className={props.toggleState ? "task active": "task"}>
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
                            <button className="save-btn">Save <i className='bx bx-save' onClick={handleSubmit}></i></button>
                            <button type="button" className="delete-btn" onClick={props.handleDelete}><i className='bx bx-trash' ></i></button>
                        </div>
                        :
                        <div className="task-btns">
                            <div>
                                <button type="button" className="edit-btn" onClick={props.handleEdit}>Edit <i className='bx bx-edit'></i></button>
                                <button type="button" className="delete-btn" onClick={props.handleDelete}><i className='bx bx-trash' ></i></button>
                            </div>
                        </div>
                    }
                </div>
            </form>
        </div>
    )
}

export default Task