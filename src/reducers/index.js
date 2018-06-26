import { combineReducers } from 'redux';
import fetchWeather from './reducer_fetchWeather';

const rootReducer = combineReducers({
    fetchWeather: fetchWeather
});

export default rootReducer;
