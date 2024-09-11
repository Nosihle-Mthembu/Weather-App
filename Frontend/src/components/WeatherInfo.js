import React from 'react';

const WeatherInfo = ({ weather }) => {
  return (
    <div>
      <h1>{weather.name}</h1>
      <h2>{weather.main.temp}°C</h2>
      <p>{weather.weather[0].description}</p>
      <p>Humidity: {weather.main.humidity}%</p>
      <p>Wind Speed: {weather.wind.speed} m/s</p>
    </div>
  );
};

export default WeatherInfo;
