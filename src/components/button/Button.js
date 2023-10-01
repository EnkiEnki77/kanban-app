import React from 'react'
import "./Button.css"

const Button = ({btnModifier, children}) => {
  return (
    <button className={`btn ${btnModifier}`}>{children}</button>
  )
}

export default Button