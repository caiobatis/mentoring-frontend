import React from 'react'
import './style.css'

const onClick = ()=> {
  console.log('cliquei no botao do lucas')
}

const Button = (props) => {
  const {color, size, children, onClick} = props

  return (
    <button onClick={onClick} className={`btn btn-${color} btn-${size}`}>
      {children}
    </button>
  )
}

export default Button
