import * as React from 'react';
import { useState } from 'react'
import { Navigation } from './components/UI/Navigation';
import {
  Button,
  InputGroup,
  Icon,
  Text
} from "@blueprintjs/core";

import { data } from './app/DATA'
import './App.css';

function App() {

  const [getData, setData] = useState(data);

  const getDanger = (level: number) => {
    if (level === 0) return "#d1d1d1"
    if (level === 1) return "#ee8104"
    if (level === 2) return "#f50404"
  }

  const filterTitle = (event: { target: HTMLInputElement }) => {
    setData(data.filter((el) => el.title.toLowerCase().includes(event.target.value.toLowerCase())))
  }

  return (
    <div className='App'>
      <div style={{ display: 'flex', height: '100%' }}>
        <div style={{ height: '100%' }}>
          <Navigation />
        </div>
        <div style={{ height: '100%', width: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'center', height: '50px', backgroundColor: '#EBF1F5' }}>
            <div style={{ paddingLeft: "20px" }}>
              <InputGroup
                round
                leftElement={<Icon icon="search" />}
                placeholder="Search for Alerts..."
                rightElement={<div style={{ backgroundColor: "#eeeeee", color: "#a8a8a8", fontSize: "12px", borderRadius: "10px", padding: "3px", marginTop: "4px", marginRight: "4px" }}> 100 </div>}
                onChange={filterTitle}
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
          <div style={{ padding: ".2rem", height: "100%", width: "100%" }}>
            <table className='table'>
              <thead className='header__row'>
                <tr>
                  <th><Text>TITLE</Text></th>
                  <th>
                    <Button icon="arrow-down" color='blue' minimal></Button>
                  </th>
                  <th><Text>STATUS</Text></th>
                  <th><Text>TRADER</Text></th>
                  <th><Text>COUNTERPARTY</Text></th>
                  <th><Text>BOOK</Text></th>
                  <th><Text>SOURCE</Text></th>
                </tr>
              </thead>
              <tbody className='body'>
                {
                  getData.map((el) => {
                    return (
                      <tr>
                        <td style={{ width: "300px" }}>{el.title}</td>
                        <td>
                          <div style={{ height: "20px", width: "20px", margin: "auto", borderRadius: "3px", backgroundColor: `${getDanger(el.danger)}` }}></div>
                        </td>
                        <td>
                          <div style={{ border: "1px solid rgb(209, 209, 209)", fontSize: "10px", textAlign: "center", padding: ".3rem 1rem", borderRadius: "5px" }}>
                            {el.status.toUpperCase()}
                          </div>
                        </td>
                        <td>{el.trader}</td>
                        <td>{el.couterParty}</td>
                        <td>{el.book}</td>
                        <td>{el.source}</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
