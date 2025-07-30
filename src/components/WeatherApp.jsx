import axios from "axios";
import { useState } from "react";
function WeatherApp(){
    const [input, setInput] = useState("")
    const [weather, setWeather] = useState({
        loading : false,
        error : false,
        data : null
    })

    const getDate = () => {
        const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const now = new Date();
        return `${days[now.getDay()]}, ${now.getDate()} ${month[now.getMonth()]}`;

    }

    const handleSearch = async (e) => {
    if (e.key === 'Enter') {
      setWeather({ ...weather, loading: true });
      try {
        const res = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
          params: {
            q: input,
            units: 'metric',
            appid: '235a2bfee1bd84867a0af062c833e1b8',
          },
        });
        setWeather({ data: res.data, loading: false, error: false });
      } catch (err) {
        setWeather({ data: null, loading: false, error: true });
      }
      setInput('');
    }
    };

    return(
        <div className="p-6 max-w-xl mx-auto bg-white rounded shadow space-y-4">
        <h1 className="text-2xl font-bold text-blue-500">Simple Weather app</h1>
        <input className="p-2 w-72 border border-blue-300 rounded shadow"
        type="text" 
        placeholder="Enter city name" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        onKeyDown={handleSearch}
        />
        
        {weather.loading && <p className="font-semibold text-green-400">Loading...</p>}
        {weather.error && <p className="font-semibold text-red-600">City not found. Please try a valid city name.</p>}

        {weather.data && (
        <div>
          <h2 className="font-semibold">{weather.data.name}, {weather.data.sys.country}</h2>
          <p className="font-semibold">{getDate()}</p>
          <h3 className="font-semibold">Temperature : {Math.round(weather.data.main.temp)}°C</h3>
          <p className="font-semibold">Description : {weather.data.weather[0].description.toUpperCase()}</p>
          <p className="font-semibold">Wind: {weather.data.wind.speed} m/s</p>
        </div>
        )}
        </div>
    )
}
export default WeatherApp;
