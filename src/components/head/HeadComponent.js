import React from 'react'
import logo from '../../images/logo.png'
import textlogo from '../../images/textlogo.png'
import './head.scss'

const HeadComponent = () => {
  return (
    <div class="head">
      <div class="logo">
        <img id="image" src={logo} />
        <img id="title" src={textlogo} />
      </div>
    </div>
  )
}

export default HeadComponent
