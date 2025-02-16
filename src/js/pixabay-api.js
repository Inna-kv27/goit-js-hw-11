import axios from 'axios';

const API_KEY = '48880683-c6af76fdc924f93949198cfc6';

export async function fetchImages(query) {
  const url = 'https://pixabay.com/api/';
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  try {
    const response = await axios.get(url, { params });
    return response.data.hits;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
}
