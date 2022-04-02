import React from 'react'
import ScanButtonComponent from '../button/ScanButtonComponent'
import './table.scss'

const TableComponent = () => {
  return (
    <table>
      <tr className="table-head">
        <th>НАЗВАНИЕ</th>
        <th>ПОСЛЕДНИЕ СКАНИРОВАНИЕ</th>
        <th></th>
      </tr>
      <tr className="table-row">
        <td>
          <div className="title">SUPERJOB</div>
        </td>
        <td></td>
        <td id="row_1">
          <ScanButtonComponent id={'row_1'} />
        </td>
      </tr>
      <tr className="table-row disabled">
        <td>
          <div className="title">GEEKBRAINS</div>
        </td>
        <td></td>
        <td>
          <ScanButtonComponent />
        </td>
      </tr>
      <tr className="table-row disabled">
        <td>
          <div className="title">SKILBOX</div>
        </td>
        <td></td>
        <td>
          <ScanButtonComponent />
        </td>
      </tr>
      <tr className="table-row disabled">
        <td>
          <div className="title">РШУ</div>
        </td>
        <td></td>
        <td>
          <ScanButtonComponent />
        </td>
      </tr>
      <tr className="table-row disabled">
        <td>
          <div className="title">НЕТОЛОГИ</div>
        </td>
        <td></td>
        <td>
          <ScanButtonComponent />
        </td>
      </tr>
    </table>
  )
}

export default TableComponent
