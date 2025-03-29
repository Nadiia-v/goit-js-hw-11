import axios from 'axios';

const mainURL = 'https://pixabay.com/api/';
const apiKey = '49590531-00b723f692e526587c18c8f84';

export function fetchImages(userInput) {
  return axios
    .get(mainURL, {
      params: {
        key: apiKey,
        q: userInput,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => response.data)
    .catch(error => {
      console.error('Failed to fetch data from Pixabay API:', error);
      throw error;
    });
}
