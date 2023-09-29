import React from 'react'
import "./Button.css"

const Button = ({btnModifier}) => {
  return (
    <button className={`btn ${btnModifier}`}>Button</button>
  )
}

export default Button