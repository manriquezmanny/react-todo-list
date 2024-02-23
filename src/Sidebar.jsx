import { useState, useEffect } from "react"

function Sidebar(props) {

    const [toggleState, setToggleState] = useState(props.toggleState)

    function toggleSideBar() {
        setToggleState(!toggleState)
    }

    useEffect(() => {
        props.sendToggleState(toggleState)
    }, [toggleState])

    return (
        <div className={toggleState ? "sidebar active" : "sidebar"}>
            {toggleState ?
                <div className="sidebar-header active">
                    <button onClick={toggleSideBar} className={"sidebar-btn active"}><img src="../public/listLeap.png" className="logo"></img></button>
                    <h1 className="app-name">ListLeap</h1>
                </div>
                : 
                <div className="sidebar-header">
                    <button onClick={toggleSideBar} className={"sidebar-btn"}><img src="../public/listLeap.png" className="logo"></img></button>
                </div>
            }
        </div>
    )
}

export default Sidebar