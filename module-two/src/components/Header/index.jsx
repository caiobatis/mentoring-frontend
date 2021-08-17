import React, { useState, Fragment } from 'react'

import Navigation from '../Navigation'
import MobileButton from '../MobileButton'

import './style.css'


const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    if(isOpen === true) {
      setIsOpen(false)
    } else {
      setIsOpen(true)
    }
  }

  return (
    <>
      <div className="header preto pequeno">
        <div className="container">
          <div className="organiza-topo">
            <Navigation />
            
            <div className="logo">
              <img src="logotipo.png" alt=".mentoring"/>
            </div>
            
            <div className="acao">
              <button className="btn azul-escuro btn-medio borda-arredondada">Entrar</button>
            </div>

            <MobileButton color="blue" cliqueaqui={handleClick}/>
          </div>
        </div>
      </div>
      <div className="">
        <div className={`mobile-menu-nav ${isOpen == true ? 'visible' : ''}`}>
          <ul className="nav">
            <li>Home</li>
            <li>Sobre</li>
            <li>Contato</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Header