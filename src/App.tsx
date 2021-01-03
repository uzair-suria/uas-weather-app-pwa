import React, { useState } from 'react';
import { fetchWeather, WeatherObject } from './api/fetchWeather';

import './App.css';

const App: React.FC = () => {
	const [query, setQuery] = useState<string>('');
	const [weather, setWeather] = useState<WeatherObject>();

	const search = async (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			const data: WeatherObject = await fetchWeather(query);
			setWeather(data);
			setQuery('');
			console.log(weather);
		}
	};

	return (
		<div className="main-container">
			<input
				type="text"
				className="search"
				placeholder="Enter a city name..."
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				onKeyPress={search}
			/>
			{weather?.main && (
				<div className="city">
					<h2 className="city-name">
						<span>{weather.name}</span>
						<sup>{weather.sys.country}</sup>
					</h2>
					<div className="city-temp">
						{Math.round(weather.main.temp)}
						<sup>&deg;C</sup>
					</div>
					<div className="info">
						<img
							src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
							alt={weather.weather[0].description}
							className="city-icon"
						/>
						<p>{weather.weather[0].description}</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default App;
