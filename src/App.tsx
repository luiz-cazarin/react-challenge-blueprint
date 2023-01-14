import * as React from 'react';
import { Navigation } from './components/UI/Navigation';
import {
  Button,
  InputGroup,
  Icon,
} from "@blueprintjs/core";

import {
  Table2,
  Cell,
  Column
} from "@blueprintjs/table"

import { data } from './app/DATA'
import './App.css';
import { Table } from '@blueprintjs/table';
function App() {
  console.log(data);
  const renderCel = () => {
    return <Cell>3</Cell>
  }
  return (
    <div className='App'>
      <div style={{ display: 'flex', height: '100%' }}>
        <div style={{ height: '100%' }}>
          <Navigation />
        </div>
        <div style={{ height: '100%', width: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'center', height: '50px', backgroundColor: '#EBF1F5' }}>
            <div style={{ margin: "20px" }}>
              <InputGroup
                round
                leftElement={<Icon icon="search" />}
                placeholder="Search for Alerts..."
                rightElement={<div style={{ backgroundColor: "#eeeeee", color: "#a8a8a8", fontSize: "12px", borderRadius: "10px", padding: "3px", marginTop: "4px", marginRight: "4px" }}> 100 </div>}
              />
            </div>
            <Button
              minimal
              icon="list"
              text="List"
            />
            <Button
              minimal
              icon="grid-view"
              text="Group by Trader"
            />
            <div style={{ marginLeft: "auto", marginRight: "20px" }}>
              <Button
                minimal
                text="Take action"
              />
            </div>
          </div>
          <div>
            <Table2 numRows={data.length}>
              <Column name='Title'/>
              <Column columnHeaderCellRenderer={renderCel} />
            </Table2>
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
