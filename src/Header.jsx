function Header(props) {
    return (
        <>
            <form id="header-form">
                <h2 id="main-header" style={{paddingTop:"20px"}}>TO DO LIST</h2>
                <div className="header-right">
                    <label>To Do:
                        <input className="input-field" type="text" name="objective" id="objective"/>
                    </label>
                    <button className="add-task-btn" onClick={props.handleAddTask}>Add</button>
                </div>
            </form>
        </>
    )
}

export default Header