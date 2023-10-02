import React from 'react'
import './TaskColumn.css'
import Task from '../task/Task'

const TaskColumn = ({dotColor, title, columnCount}) => {
  return (
    <section className='task-column'>
        <div className='column-title'>
            <div className='column-title-dot' style={{color: dotColor}}></div>
            <h4 className='column-title-text'>{title} {columnCount}</h4>
        </div>
        <Task/>
    </section>
  )
}

export default TaskColumn