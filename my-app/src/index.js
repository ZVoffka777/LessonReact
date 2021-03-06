import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import img from './content-1242.png';
import Dialogs from './components/Dialogs/Dialogs';
import Profile from './components/Profile/Profile';
import state from './redux/state';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    <App state={state}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
