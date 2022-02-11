import axios from 'axios';

const apiInstance = axios.create({
  baseURL: 'https://tiktok33.p.rapidapi.com/',
  headers: {
    'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
    'x-rapidapi-key': `${process.env.REACT_APP_API_KEY}`,
  },
});

export function apiGet(url: string) {
  return apiInstance.get(url);
}

export { apiInstance };
