import React from 'react'

export default function Navigation(props) {
  const {visibilidade} = props

  return (
    <div className={`mobile-menu-nav ${visibilidade == true ? 'visible' : ''}`}>
      <ul className="nav">
        <li>Home</li>
        <li>Sobre</li>
        <li>Contato</li>
      </ul>
    </div>
  )
}
