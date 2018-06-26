//API_KEY=c329f262475e5cb8a7fb9384f20cda6e
//http://api.openweathermap.org/data/2.5/forecast?q=London,us&mode=xml&appid=b6907d289e10d714a6e88b30761fae22
import axios from 'axios';

export const FETCH_WEATHER = 'FETCH_WEATHER';
const API_KEY='c329f262475e5cb8a7fb9384f20cda6e';
const ROOT_URL=`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export function fetchData(city){
  const newWeatherURL = `${ROOT_URL}&q=${city},GB`;
  const promise = axios.get(newWeatherURL);

  return{
      type: FETCH_WEATHER,
      payload:promise
  };
}
