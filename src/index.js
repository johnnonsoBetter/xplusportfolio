import React from 'react';
import ReactDOM from 'react-dom';
import 'core-js/actual';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from './context/AuthContext';
import { FetchProvider } from './context/FetchContext';
import { BrowserRouter } from 'react-router-dom';
import { HashRouter } from 'react-router-dom/cjs/react-router-dom.min';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter >
      <AuthProvider>
      <FetchProvider>
        <App />
      </FetchProvider>
      
      </AuthProvider>
    </HashRouter>
    
    
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
