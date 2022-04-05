import React, { useMemo, useState } from 'react'
import ScanButtonComponent from '../../button/ScanButtonComponent'
import axios from 'axios'
import CataloguesComponent from '../CataloguesComponent'
import { settings } from '../../../config'

const RowComponent = (props) => {
  const [catalog, setCatalog] = useState([])
  const [show, setShow] = useState('none')
  const [classRow, setClassRow] = useState('table-row')

  const getCataloguesSJ = async () => {
    if (catalog.length === 0) {
      await axios
        .get(settings.urlCatalogSJ)
        .then((response) => {
          setCatalog(response.data)
        })
        .catch((err) => {
          console.error(err)
        })
    }
  }

  const switchCatalog = () => {
    switch (props.title) {
      case 'SUPERJOB': {
        getCataloguesSJ()
      }
    }
  }

  const toggleCatalog = (event) => {
    console.log(event)
    event.stopPropagation();
    if (show === 'none') {
      setClassRow('table-row table-row__auto')
      setShow('block')
    } else {
      setClassRow('table-row')
      setShow('none')
    }
  }

  useMemo(() => {
    switchCatalog()
  })

  return (
    <div
      onClick={toggleCatalog}
      className={props.disabled ? `disabled ${classRow}` : classRow}
    >
      <div class="table-td">
        <div className="title">{props.title}</div>
      </div>
      <div class="table-td"></div>
      {catalog.length == 0 ? (
        <div id={`row_${props.id}`} class="table-td">
          <ScanButtonComponent id={`row_${props.id}`} url={props.url} urlParams={props.urlParams} />
        </div>
      ) : (
        ''
      )}
      {catalog.length > 0 ? (
        <div className="catalog" style={{ display: show }}>
          <CataloguesComponent catalog={catalog} />
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default RowComponent
