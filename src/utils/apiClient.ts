import axios from 'axios';

const UNSPLASH_ACCESS_KEY = 'your_access_key_here'; // Replace with your Unsplash API Access Key

const apiClient = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
  },
});

export default apiClient;
