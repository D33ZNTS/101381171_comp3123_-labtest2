import React from 'react';

const WeatherCard = ({ data }) => {
  const { main, weather } = data;

  return (
    <div>
      <h2>{data.name}</h2>
      <p>Temperature: {main.temp}°C</p>
      <p>Condition: {weather[0].main}</p>
      {/* Add more information as needed */}
    </div>
  );
};

export default WeatherCard;
