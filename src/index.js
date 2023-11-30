import React from 'react';
import ReactDOM from 'react-dom';
import WeatherApp from './WeatherApp';
import reportWebVitals from './reportWebVitals';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <WeatherApp />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
