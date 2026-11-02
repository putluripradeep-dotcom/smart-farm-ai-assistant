const weatherData = {
  city: 'Hyderabad',
  temp: '29°C',
  humidity: '68%',
  wind: '12 km/h',
  forecast: 'Chance of light rain in the evening'
};

export default function WeatherPage() {
  return (
    <div className="card">
      <h2>Weather Updates</h2>
      <div className="grid grid-2">
        <div>
          <p><strong>City:</strong> {weatherData.city}</p>
          <p><strong>Temperature:</strong> {weatherData.temp}</p>
          <p><strong>Humidity:</strong> {weatherData.humidity}</p>
          <p><strong>Wind:</strong> {weatherData.wind}</p>
        </div>
        <div className="alert">
          <strong>Forecast:</strong>
          <p>{weatherData.forecast}</p>
        </div>
      </div>
    </div>
  );
}
