import React, { useState, useEffect } from 'react';
import WeatherInfo from './components/WeatherInfo';
import { getWeatherData } from './pages/weatherService';
import { getWeatherByCoords } from './pages/weatherService';
// import WeatherComponent from './components/weatherComponent';

function App() {
  const [location, setLocation] = useState('');
  const [weather, setWeather] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        fetchWeatherByCoords(latitude, longitude);
      });
    }
  }, []);

  const fetchWeatherByCoords = async (lat, lon) => {
    if (lat && lon) {
      try {
        const data = await getWeatherByCoords(lat, lon);
        setWeather(data);
      } catch (error) {
        console.error('Error fetching weather by coordinates:', error);
      }
    }
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleGetWeatherClick = async () => {
    if (location) {
      try {
        const data = await getWeatherData(location);
        if (data.error) {
          setError(data.error);
        } else {
          setWeather(data);
        }
      } catch (err) {
        console.error('Error fetching weather:', err);
        setError('Failed to fetch weather data');
      }
    }
  };

  return (
    <div className="App">
      <input
        type="text"
        value={location}
        onChange={handleLocationChange}
        placeholder="Enter location"
      />
      <button onClick={handleGetWeatherClick}>Get Weather</button>

      {error && <p>{error}</p>}
      {weather && <WeatherInfo weather={weather} />}
      {/* <WeatherComponent/> */}
    </div>
  );
}

export default App;