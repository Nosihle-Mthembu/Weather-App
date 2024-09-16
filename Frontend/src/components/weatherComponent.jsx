// import React, { useEffect, useState } from 'react';
// import { getWeatherDataWithAlerts } from '../pages/weatherService';

// const WeatherComponent = ({ lat, lon }) => {
//   const [weatherData, setWeatherData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
    //   const data = await getWeatherDataWithAlerts(lat, lon);
    //   setWeatherData(data);
    // };

//     fetchData();
//   }, [lat, lon]);

//   const displayAlerts = (data) => {
//     if (data.alerts && data.alerts.length > 0) {
//       return (
//         <div className="alerts">
//           {data.alerts.map((alert, index) => (
//             <div key={index} className="alert">
//               <h4>{alert.event}</h4>
//               <p>{alert.description}</p>
//               <p><strong>Start:</strong> {new Date(alert.start * 1000).toLocaleString()}</p>
//               <p><strong>End:</strong> {new Date(alert.end * 1000).toLocaleString()}</p>
//             </div>
//           ))}
//         </div>
//       );
//     }
//     return null;
//   };

//   return (
    // <div>
      {/* Your existing weather display logic */}
      {/* {weatherData && <div>{displayAlerts(weatherData)}</div>}
    </div> */}
//   );
// };

// export default WeatherComponent;
