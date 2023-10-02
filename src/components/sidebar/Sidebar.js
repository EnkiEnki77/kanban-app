import React from 'react'
import './Sidebar.css'
import BoardSelector from '../board-selector/BoardSelector'
import ThemeSwitch from '../theme-switch/ThemeSwitch'

const Sidebar = (boardCount) => {
  return (
    <aside>
        <h4>all boards ({boardCount})</h4>
        <BoardSelector>Platform Launch</BoardSelector>
        <BoardSelector>Marketing Plan</BoardSelector>
        <BoardSelector>Roadmap</BoardSelector>
        <BoardSelector>+ Create New Board</BoardSelector>
        <ThemeSwitch/>
        {/* <SidebarToggle/> */}
    </aside>
  )
}

export default Sidebar