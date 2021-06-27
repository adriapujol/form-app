import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.scss';
import { AuthProvider } from './context/AuthContext';
import { LanguageProvider } from './context/LanguageContext';


ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
