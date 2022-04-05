import axios from 'axios'
import FileSaver from 'file-saver'
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
    event.stopPropagation();
    setShow('none')
    download()
    ReactDOM.render(
      <React.Fragment>
        <CancelButtonComponent />
        <StatusComponent width={'10%'} />
      </React.Fragment>,
      document.getElementById(props.id),
    )
  }

  const getUrl = () => {
    let url = props.url;
    for (var i = 0; i < props.urlParams.length; i++) {
      url = url.replace('%s', props.urlParams[i]);
    }
    return url;
  }

  const download = async () => {
    await axios.get(getUrl(), { responseType: 'blob' }).then((response) => {
      const fileNameHeader = "content-disposition";
      const suggestedFileName = response.headers[fileNameHeader].match(/(?<=filename=).*$/g);
      const effectiveFileName = (suggestedFileName === undefined
        ? "allergierOchPreferenser.xls"
        : suggestedFileName);
      FileSaver.saveAs(response.data, effectiveFileName);

    }).catch((response) => {
      console.error("Could not Download the Excel report from the backend.", response);
    });
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
