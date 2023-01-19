import * as React from 'react';
import { useState } from 'react'
import { Navigation } from './components/UI/Navigation';
import { Fragment } from 'react';

import './App.css';
import { data } from './app/DATA'
import { HeaderPage } from './components/HeaderPage';
import { TableAlerts } from './components/TableAlerts';

function App() {
  const [getAlerts] = useState(data); // get...
  const [getFilteredByTags, setFilteredByTags] = useState(getAlerts);
  const [getFilteredByTitle, setFilteredByTitle] = useState(getAlerts);

  const handleTitleAlerts = (target: any) => {
    setFilteredByTitle(target);
  }

  const handleTagProperties = (target: []) => {
    let filteredArr = getAlerts.filter((alert) => {
      const tags = [alert.status];
      return target.some(f => tags.includes(f));
    });
    setFilteredByTags(filteredArr)
    setFilteredByTitle(filteredArr)
  }

  return (
    <Fragment>
      <div className='App'>
        <div style={{ display: 'flex', height: '100%' }}>
          <Navigation handleTagProperties={handleTagProperties} />
          <div style={{ height: '100%', width: '100%' }}>
            <HeaderPage alerts={getFilteredByTags} handleTitleAlerts={handleTitleAlerts}></HeaderPage>
            <TableAlerts alerts={getFilteredByTitle}></TableAlerts>
          </div>
        </div>
      </div >
    </Fragment>
  );
}

export default App;
