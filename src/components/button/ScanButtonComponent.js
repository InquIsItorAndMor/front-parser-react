import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import StatusComponent from '../status/StatusComponent'
import './button.scss'
import CancelButtonComponent from './CancelButtonComponent'
import './scan_button.scss'

const ScanButtonComponent = (props) => {
  const [show, setShow] = useState('block')
  const showButtonStartScan = (event) => {
    console.log(event)
    setShow('none')
    ReactDOM.render(
      <React.Fragment>
        <CancelButtonComponent />
        <StatusComponent width={'10%'} />
      </React.Fragment>,
      document.getElementById(props.id),
    )
  }

  return (
    <div
      className="button scan_button"
      style={{ display: show }}
      onClick={showButtonStartScan}
    >
      <div className="title">Начать сканирование</div>
    </div>
  )
}

export default ScanButtonComponent
