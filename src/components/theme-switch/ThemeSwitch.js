import React from 'react'
import './ThemeSwitch.css'
import light from '../../assets/icon-light-theme.svg'
import dark from '../../assets/icon-dark-theme.svg'

const ThemeSwitch = () => {
  return (
    <div className='theme-switch'>
        <img src={light} alt='light theme'/>
        <div className='switch-outer'>
            <div className='switch-inner'></div>
        </div>
        <img src={dark} alt='dark theme'/>
    </div>
  )
}

export default ThemeSwitch