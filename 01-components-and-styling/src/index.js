import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './globalStyles/globalStyles.css';
import 'modern-normalize/modern-normalize.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// const myTag = React.createElement(
//   'div',
//   {},
//   'HELLO FIRST TAG'
// );

// const JsxLayout = () => <h2>TITLE</h2>;

document.addEventListener('click', () =>
  console.log('CLICK')
);

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
  <React.StrictMode>
    {/* <JsxLayout /> */}
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
