import React from 'react';

const WeatherCard = ({ data }) => {
  const { main, weather, name } = data;
  const temperatureCelsius = (main.temp - 273.15).toFixed(2); // Convert Kelvin to Celsius

  return (
    <div>
      <h2>{name}</h2>
      <p>Temperature: {temperatureCelsius}°C</p>
      <p>Condition: {weather[0].main}</p>
      {/* Add more information as needed */}
    </div>
  );
};

export default WeatherCard;
