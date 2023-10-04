import React from 'react'
import './TaskDetails.css'
import SubtaskCheckbox from '../subtask-checkbox/SubtaskCheckbox'

const TaskDetails = () => {
  return (
    <div className='task-details-bg'> 
        <div className='task-details-container'>
            <div className='task-details-title'></div>
            <img className='task-details-settings-icon' src={settings} alt='task details settings icon'/>
            <p className='task-details-body'></p>
            <p className='task-details-subtasks-title'></p>
            <SubtaskCheckbox/> 
            {/* <TaskStatus/> */}
        </div>
    </div>
  )
}

export default TaskDetails