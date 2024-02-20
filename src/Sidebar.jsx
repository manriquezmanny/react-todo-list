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
            <button onClick={toggleSideBar}>Toggle</button>
        </div>
    )
}

export default Sidebar