import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//render: renderiza (mostra em tela) o APP dentro do element 'root'
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);