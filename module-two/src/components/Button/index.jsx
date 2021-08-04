import React from 'react'
import './style.css'

const Button = (props) => {
  console.log(props)

  const {color, size} = props

  return (
    <button className={`btn btn-${color} btn-${size}`}>
      meu botao
    </button>
  )
}

export default Button