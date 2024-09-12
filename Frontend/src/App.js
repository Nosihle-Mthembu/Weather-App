// import React, { useState, useEffect } from 'react';
// import WeatherInfo from './components/WeatherInfo';
// import { getWeatherData } from './services/weatherService';
// import axios from 'axios';
import SearchBAr from "./components/searchButton";
import ClientView from "./pages/clientView";


function App() {
//   const [location, setLocation] = useState('London');
//   const [weather, setWeather] = useState(null);
//   const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
//   const BASE_URL = 'https://api.openweathermap.org/data/2.5';

//   useEffect(() => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition((position) => {
//         const { latitude, longitude } = position.coords;
//         getWeatherByCoords(latitude, longitude);
//       });
//     }
//   }, []);
  
//   const getWeatherByCoords = async (lat, lon) => {
//     try {
//       const response = await axios.get(`${BASE_URL}/weather`, {
//         params: {
//           lat,
//           lon,
//           units: 'metric',
//           appid: API_KEY
//         }
//       });
//       setWeather(response.data);
//     } catch (error) {
//       console.error('Error fetching weather by coordinates:', error);
//     }
//   };
  

//   useEffect(() => {
//     const fetchWeather = async () => {
//       try {
//         const data = await getWeatherData(location);
//         setWeather(data);
//       } catch (error) {
//         console.error('Error fetching weather:', error);
//       }
//     };
//     fetchWeather();
//   }, [location]);

//   const handleLocationChange = (e) => {
//     setLocation(e.target.value);
//   };

  return (
    <div className="App">
      <SearchBAr/>
      <ClientView/>
        {/* <input
        type="text"
        value={location}
        onChange={handleLocationChange}
        placeholder="Enter location"
      />
      <button onClick={() => setLocation(location)}>Get Weather</button>
      {weather && <WeatherInfo weather={weather} />} */}
    </div>
  );
}

export default App;

