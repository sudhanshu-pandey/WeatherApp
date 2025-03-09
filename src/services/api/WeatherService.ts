import axios from 'axios';
import { BASE_URL, API_KEY} from '@env';

export const getWeatherForecast = async (
  location: string,
  days: number = 2,
) => {
  try {
    const response = await axios.get(`${BASE_URL}/forecast.json`, {
      params: {key: API_KEY, q: location, days, aqi: 'no', alerts: 'no'},
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getSearchAutoComplete = async (location: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/search.json`, {
      params: {key: API_KEY, q: location},
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
