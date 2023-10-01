import React from 'react'

const TextField = ({label, placeholder}) => {
  return (

    <label className='text-field-label'>
        {label}
        <div className='text-field-container' >
            <input className='text-field' type='text' placeholder={placeholder}/>
        </div>
    </label>
   
  )
}

export default TextField