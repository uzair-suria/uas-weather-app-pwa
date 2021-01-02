import React, { useState } from 'react';
import { fetchWeather } from './api/fetchWeather';

import './App.css';

const App: React.FC = () => {
	const [query, setQuery] = useState<string>('');

	const search = async (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			const data = await fetchWeather(query);
			console.log(data);
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
		</div>
	);
};

export default App;
