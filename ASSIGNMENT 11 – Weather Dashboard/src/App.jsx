import { useState, useEffect } from "react";
import "./App.css";

function App() {

  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function fetchWeather() {
    setLoading(true);
    setError("");

    fetch("https://api.open-meteo.com/v1/forecast?latitude=12.97&longitude=77.59&current_weather=true")
      .then(res => res.json())
      .then(data => {
        setWeather(data.current_weather);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch data");
        setLoading(false);
      });
  }

  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <div className="container">
      <h1>Weather      Dashboard</h1>
      <h2>Bangalore, India</h2>
      <button onClick={fetchWeather}>Refresh</button>

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

      {weather && !loading && (
        <div>
          <p>Temperature: {weather.temperature}°C</p>
          <p>Wind Speed: {weather.windspeed}</p>
        </div>
      )}
    </div>
  );
}

export default App;