function Task(props) {
    return(
        <div className="task">
            <h3>{props.number}.</h3>
            <form className="task-form">
                {props.edit ? 
                <label>Edit: <input type="text" className="edit-input" id="edit-input"/></label>
                :
                <p className="objective-text">{props.objective}</p>
                }
                <div>
                    {props.edit ?
                        <div className="task-btns">
                            <div><button className="save-btn" onClick={props.handleSave}>Save <i class="bi bi-check2"></i></button></div>
                            <button type="button" className="delete-btn" onClick={props.handleDelete}>Delete <i class="bi bi-trash"></i></button>
                        </div>
                        :
                        <div className="task-btns">
                            <button type="button" className="edit-btn" onClick={props.handleEdit}>Edit <i class="bi bi-pencil"></i></button>
                            <button type="button" className="delete-btn" onClick={props.handleDelete}>Delete <i class="bi bi-trash"></i></button>
                        </div>
                    }
                </div>
            </form>
        </div>
    )
}

export default Task