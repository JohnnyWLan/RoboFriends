import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import App from './containers/App';
import 'tachyons';
import {robots} from './robots';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
