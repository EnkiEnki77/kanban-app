import React from 'react'
import Logo from '../logo/Logo'
import Button from '../button/Button'
import BoardSettings from '../../assets/icon-vertical-ellipsis.svg'

const Header = ({boardTitle}) => {
  return (
    <header className='header'>
        <Logo/>
        <h1 className='board-title'>{boardTitle}</h1>
        <Button buttonModifier=''>
            + Add New Task
        </Button>
        <img className='board-settings' src={BoardSettings} alt='board settings'/>
    </header>
  )
}

export default Header