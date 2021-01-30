import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App
		urlQuotes='https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
		colors={[
		  '#16a085',
		  '#27ae60',
		  '#2c3e50',
		  '#f39c12',
		  '#e74c3c',
		  '#9b59b6',
		  '#FB6964',
		  '#342224',
		  '#472E32',
		  '#BDBB99',
		  '#77B1A9',
		  '#73A857'
		]}
	/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
