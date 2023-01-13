import * as React from 'react';
import { Navigation } from './components/UI/Navigation';
import './App.css';
function App() {
  return (
    <div className='App'>
      <div style={{ display: 'flex', height: '100%' }}>
        <div style={{ height: '100%' }}>
          <Navigation />
        </div>
        <div style={{ height: '100%', width: '100%' }}>
          <div style={{ display: 'flex', justifyContent: 'space-around', height: '50px', backgroundColor: '#EBF1F5' }}>
            <input placeholder='(icon) Search (10 alerts)'></input>
            <button>List</button>
            <button>Group by Trader - drop dow</button>
            <button>Take action</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
