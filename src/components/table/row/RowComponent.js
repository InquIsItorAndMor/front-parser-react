import React, { useMemo, useState } from 'react'
import ScanButtonComponent from '../../button/ScanButtonComponent'
import axios from 'axios'
import CataloguesComponent from '../CataloguesComponent'

const RowComponent = (props) => {
  const [catalog, setCatalog] = useState([])
  const [show, setShow] = useState('none')
  const [classRow, setClassRow] = useState('table-row')

  const getCataloguesSJ = async () => {
    if (catalog.length === 0) {
      await axios
        .get('http://localhost:8080/sokratparsersj/getAllCatalogues')
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

  const toggleCatalog = () => {
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
          <ScanButtonComponent id={`row_${props.id}`} />
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
