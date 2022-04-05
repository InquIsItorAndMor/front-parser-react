import React from 'react'
import { settings } from '../../config'
import RowComponent from './row/RowComponent'
import './table.scss'

const TableComponent = () => {
  return (
    <div className="table">
      <div className="table-head">
        <div className="table-th">НАЗВАНИЕ</div>
        <div className="table-th">ПОСЛЕДНИЕ СКАНИРОВАНИЕ</div>
        <div className="table-th"></div>
      </div>
      <RowComponent id={1} title={'SUPERJOB'} disabled={false} />
      <RowComponent id={2} title={'GEEKBRAINS'} disabled={false} url={settings.ulrDownloadExcelVacanceSJ} urlParams={[33]} />
      <RowComponent id={3} title={'SKILBOX'} disabled={true} />
      <RowComponent id={4} title={'РШУ'} disabled={true} />
      <RowComponent id={5} title={'НЕТОЛОГИ'} disabled={true} />
    </div>
  )
}

export default TableComponent
