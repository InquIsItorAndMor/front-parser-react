import React from 'react'
import './status.scss'

const StatusComponent = (props) => {
  return (
    <div className="status">
      <div className="loading" style={{ width: props.width }}></div>
      <div className="title">Загружаю...</div>
    </div>
  )
}

export default StatusComponent
