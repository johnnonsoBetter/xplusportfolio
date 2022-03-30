import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from './context/AuthContext';
import { FetchProvider } from './context/FetchContext';
import { BrowserRouter } from 'react-router-dom';

// import 'core-js/es7/'; import 'core-js/es6/'; import 'raf/polyfill';
import 'raf/polyfill'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter >
      <AuthProvider>
      <FetchProvider>
        <App />
      </FetchProvider>
      
      </AuthProvider>
    </BrowserRouter>
    
    
  </React.StrictMode>,
  document.getElementById('root')
);




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
