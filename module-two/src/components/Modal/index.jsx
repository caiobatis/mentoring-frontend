import React from 'react'
import { useState } from 'react/cjs/react.development'
import './style.scss'

function Modal(props) {
  const {visible, onClose} = props

  const [visibilidade, setVisibilidade] = useState('')

  
  const interceptor = () => {
    setVisibilidade('saida')

    setTimeout(()=> {
      onClose() // aqui a modal fecha de verdade
    }, 1000)
  }

  return (
    <>
      {
        visible && (
        <div className={`modal ${visibilidade}`}>
          <div className="card">
            <div onClick={interceptor} className="btn-close"></div>
          </div>
        </div>
        )
      }
      {
        visible && <div onClick={interceptor} className="obfuscator"></div>
      }
    </>
  )
}

export default Modal