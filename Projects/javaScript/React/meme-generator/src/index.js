import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './components/App';
import 'bootstrap/dist/css/bootstrap.css';
import './object.css'
import './index.css'
import AppTest from './components/Test/AppTest';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    {/* <App /> */}
    <AppTest  />
    
  </React.StrictMode>
);

