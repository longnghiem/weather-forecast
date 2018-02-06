import axios from 'axios';

const API_KEY = 'f75062b7b081778d584b162d68418f46';
const ROOT_URL =`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city},fin`;
  const request = axios.get(url);


  return {
    type: FETCH_WEATHER,
    payload :request
  };
}
