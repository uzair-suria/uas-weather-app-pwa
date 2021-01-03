import axios from 'axios';

const URL = `https://api.openweathermap.org/data/2.5/weather`;
const API_KEY = `f33a484cf794d08d0148764789aaba32`;

export type WeatherObject = {
	base: string;
	clouds: { all: number };
	cod: number;
	coord: { lat: number; lon: number };
	dt: number;
	id: number;
	main: {
		feels_like: number;
		humidity: number;
		pressure: number;
		temp: number;
		temp_max: number;
		temp_min: number;
	};
	name: string;
	sys: {
		country: string;
		id: number;
		sunrise: number;
		sunset: number;
		type: number;
	};
	timezone: number;
	visibility: number;
	weather: { id: number; main: string; description: string; icon: string }[];
	wind: { deg: number; speed: number };
};

// export type WeatherResponse = WeatherObject | undefined;
export type WeatherResponse =
	| undefined
	| {
			config: object;
			data: WeatherObject;
			headers: object;
			request: object;
			status: number;
			statusText: string;
	  };

export const fetchWeather = async (query: string) => {
	const res = await axios.get(URL, {
		params: {
			q: query,
			units: 'metric',
			APPID: API_KEY,
		},
	});
	const data: WeatherObject = res.data;
	return data;
};
