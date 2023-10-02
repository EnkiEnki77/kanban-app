import React, { Children } from 'react'
import './BoardSelector.css'
import boardIcon from '../../assets/icon-board.svg'

const BoardSelector = ({newBoardBtn = false, children}) => {
  return (
    <div className={`${newBoardBtn ? 'board-tab' : 'new-board-btn'}`}>
        <img src={boardIcon} alt='board tab icon'/> 
        {children}
    </div>
  )
}

export default BoardSelector