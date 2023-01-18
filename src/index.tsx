import React from 'react';
import { Provider } from 'react-redux';
import  store from './app/store';
import { createRoot } from 'react-dom/client';
import './index.css';


import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "@blueprintjs/table/lib/css/table.css";
// import "@blueprintjs/datetime/lib/css/blueprint-datetime.css";
// import "@blueprintjs/select/lib/css/blueprint-select.css";


import App from './App';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
