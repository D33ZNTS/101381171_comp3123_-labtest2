// WeatherApp.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherCard from './WeatherCard';
import SearchBar from './SearchBar';
import { Container, CssBaseline, Paper, Typography, Box } from '@mui/material';

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('Toronto');
  const API_KEY = 'b3ec7617c33971a23d8fbb369b2eeaf1';

  useEffect(() => {
    axios
      .get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
      .then((response) => {
        setWeatherData(response.data);
      })
      .catch((error) => console.error('Error fetching data: ', error));
  }, [city]);

  return (
    <Container component="main" maxWidth="xs" sx={{ marginTop: 4 }}>
      <CssBaseline />
      <Paper elevation={3} sx={{ padding: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#f5f5f5' }}>
        <Typography variant="h4" align="center" gutterBottom sx={{ color: '#333333' }}>
          Weather App
        </Typography>
        <SearchBar setCity={setCity} />
        {weatherData && (
          <Box mt={3}>
            <WeatherCard data={weatherData} />
          </Box>
        )}
      </Paper>
    </Container>
  );
};

export default WeatherApp;
