import React  from 'react'

export default function MobileButton(props) {
  const { cliqueaqui } = props

  return (
    <button onClick={cliqueaqui} className="mobile-menu">
      <div></div>
      <div></div>
      <div></div>
    </button>
  )
}
