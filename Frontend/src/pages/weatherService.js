import axios from 'axios';

const API_KEY = 'dc0fc4b16f77c98bdd23b1fd59374c06';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const getWeatherByCoords = async (lat, lon) => {
    try {
      const response = await axios.get(`${BASE_URL}/weather`, {
        params: {
          lat,
          lon,
          units: 'metric',
          appid: API_KEY,
        },
      });
  
      if (response.data) {
        return response.data;
      } else {
        throw new Error('Invalid response format');
      }
    } catch (error) {
      console.error('Error fetching weather by coordinates:', error);
      return { error: 'Failed to fetch weather data' };
    }
  };
  
//   export const getWeatherDataWithAlerts = async (lat, lon) => {
//     try {
//       const response = await axios.get(`${BASE_URL}/onecall`, {
//         params: {
//           lat,
//           lon,
//           units: 'metric',
//           appid: API_KEY,
//         },
//       });
  
//       if (response.data) {
//         const { alerts, ...weatherData } = response.data;
//         return { alerts, weatherData };
//       } else {
//         throw new Error('Invalid response format');
//       }
//     } catch (error) {
//       console.error('Error fetching weather data with alerts:', error);
//       return { error: 'Failed to fetch weather data with alerts' };
//     }
//   };


export const getWeatherData = async (location) => {
    if (!location) {
      throw new Error('Location parameter is required');
    }
    try {
      const response = await axios.get(`${BASE_URL}/weather`, {
        params: {
          q: location,
          units: 'metric',
          appid: API_KEY,
        },
      });
      if (response.data && response.data.main) {
        return response.data;
      } else {
        throw new Error('Invalid response format');
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
      return { error: 'Failed to fetch weather data' };
    }
  };
  

  
  