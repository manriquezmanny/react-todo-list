import { useState } from 'react'

function Sidebar(props) {

    const [ sidebarToggled, setSidebarToggled ] = useState(props.sidebarToggled)

    function toggleSidebar() {
        setSidebarToggled(!sidebarToggled)
        props.sendToggleState(sidebarToggled)
    }

    return (
        
        <>
            <div className={ sidebarToggled ? "sidebar active": "sidebar" }>
                <button className="sidebar-btn" onClick={toggleSidebar}><i className='bx bx-menu bx-lg' ></i></button>
            </div>
        </>
    )
}

export default Sidebar