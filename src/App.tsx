import * as React from 'react';
import { useState } from 'react'
import { Navigation } from './components/UI/Navigation';
import { Fragment } from 'react';

import { data } from './app/DATA'
import './App.css';
import { HeaderPage } from './components/HeaderPage';
import { TableAlerts } from './components/TableAlerts';

function App() {
  const [getAlerts, setAlerts] = useState(data);
  const handleTitleAlerts = (target: any) => {
    setAlerts(target);
  }

  return (
    <Fragment>
      <div className='App'>
        <div style={{ display: 'flex', height: '100%' }}>
          <div style={{ height: '100%' }}>
            <Navigation alerts={getAlerts} />
          </div>
          <div style={{ height: '100%', width: '100%' }}>
            <HeaderPage alerts={getAlerts} handleTitleAlerts={handleTitleAlerts}></HeaderPage>
            <TableAlerts alerts={getAlerts}></TableAlerts>
          </div>
        </div>
      </div >
    </Fragment>
  );
}

export default App;
