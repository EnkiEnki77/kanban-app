import React from 'react'
import hide from '../../assets/icon-hide-sidebar.svg'

const SidebarToggle = () => {
  return (
    <div className='hide-sidebar-toggle'>
        <img className='hide-sidebar-icon' src={hide} alt='hide sidebar'/>
        <p className='hide-sidebar-text'> Hide Sidebar</p>
    </div>
  )
}

export default SidebarToggle