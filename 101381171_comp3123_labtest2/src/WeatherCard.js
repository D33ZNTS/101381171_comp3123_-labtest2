// WeatherCard.js
import React from 'react';
import { Card, CardContent, Typography, Avatar, Box } from '@mui/material';

const WeatherCard = ({ data }) => {
  const { main, weather, name } = data;
  const temperatureCelsius = main.temp.toFixed(2);

  const getWeatherIconUrl = (iconCode) => `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  return (
    <Card sx={{ width: 200, height: 250, margin: 'auto', backgroundColor: 'rgba(255, 255, 255, 0.8)', boxShadow: 2 }}>
      <CardContent>
        <Typography variant="h5" align="center" gutterBottom>
          {name}
        </Typography>
        <Box display="flex" justifyContent="center" mb={2}>
          <Avatar alt={weather[0].main} src={getWeatherIconUrl(weather[0].icon)} sx={{ width: 80, height: 80 }} />
        </Box>
        <Typography variant="h4" color="text.primary" align="center">
          {temperatureCelsius}°C
        </Typography>
        <Typography variant="body1" color="text.secondary" align="center">
          {weather[0].description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
