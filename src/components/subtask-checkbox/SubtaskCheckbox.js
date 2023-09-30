import React from 'react'
import "./SubtaskCheckbox.css"

const SubtaskCheckbox = ({label}) => {
  return (
    <div className='subtask-container'>
        <div className='checkbox' type='checkbox' id={label}></div>
        <label >{label}</label>
    </div>
  )
}

export default SubtaskCheckbox