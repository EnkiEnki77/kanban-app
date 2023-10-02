import React from 'react'
import './Board.css'
import Button from '../button/Button'

const Board = () => {
  return (
    <div className='board'>
        <p className='empty-board-message'>This board is empty. Create a new column to get started.</p>
        <Button buttonModifier=''>
            + Add New Column
        </Button>
        {/* <Sidebar/> */}
        {/* <SidebarToggle/> */}
    </div>
  )
}

export default Board