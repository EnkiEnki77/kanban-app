import React from 'react'
import './Task.css'

const Task = ({taskTitle, taskBody}) => {
  return (
    <div className='task'>
        <h3 className='task-title'>{taskTitle}</h3>
        <p className='task-body'>{taskBody}</p>
        {/* <TaskDetails/> */}
    </div>
  )
}

export default Task