import React from 'react'
import './style.css'

const onClick = ()=> {
  console.log('cliquei no botao do lucas')
}

const Button = (props) => {
  const {color, size} = props

  return (
    <button onClick={onClick} className={`btn btn-${color} btn-${size}`}>
      meu botao
    </button>
  )
}

export default Button
