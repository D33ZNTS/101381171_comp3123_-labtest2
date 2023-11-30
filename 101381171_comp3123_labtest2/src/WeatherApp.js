import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherCard from './WeatherCard';
import SearchBar from './SearchBar';

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('Toronto');
  const API_KEY = 'b3ec7617c33971a23d8fbb369b2eeaf1';

  useEffect(() => {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
      .then(response => setWeatherData(response.data))
      .catch(error => console.error('Error fetching data: ', error));
  }, [city]);

  return (
    <div>
      <SearchBar setCity={setCity} />
      {weatherData && <WeatherCard data={weatherData} />}
    </div>
  );
};

export default WeatherApp;
