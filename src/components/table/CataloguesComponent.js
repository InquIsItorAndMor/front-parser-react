import React from 'react'
import ScanButtonComponent from '../button/ScanButtonComponent'
import './table.scss'

const CataloguesComponent = (props) => {
  return (
    <div className="table">
      {props.catalog.map((value) => {
        return (
          <div className="table-row">
            <div className="table-td">
              <div className="title">{value.title_rus}</div>
            </div>
            <div className="table-td"></div>
            <div className="table-td" id={`catalog_row_${value.key}`}>
              <ScanButtonComponent id={`catalog_row_${value.key}`} />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default CataloguesComponent
