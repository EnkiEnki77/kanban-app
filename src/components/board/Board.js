import React from 'react'
import './Board.css'
import Button from '../button/Button'
import Sidebar from '../sidebar/Sidebar'
import show from '../../assets/icon-show-sidebar.svg'
import TaskColumn from '../task-column/TaskColumn'

const Board = () => {
  return (
    <div className='board'>
        <p className='empty-board-message'>This board is empty. Create a new column to get started.</p>
        <Button buttonModifier=''>
            + Add New Column
        </Button>
        <Sidebar/>
        <div className='show-sidebar'>
            <img className='show-sidebar-icon' src={show} alt='show sidebar icon'/>
        </div>
        <TaskColumn/>
        {/* <NewColumnBtn/> */}
    </div>
  )
}

export default Board