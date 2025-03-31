import { fetchImages } from './js/pixabay-api.js';
import { renderGallery, clearGallery } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const loader = document.querySelector('.loader');
const gallery = document.querySelector('.gallery');

form.addEventListener('submit', event => {
  event.preventDefault();

  const userInput = event.target.elements.search.value.trim();

  if (!userInput) {
    iziToast.error({ message: 'Enter your search word!' });
    return;
  }

  clearGallery();
  loader.classList.remove('hidden');

  fetchImages(userInput)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.warning({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        return;
      }
      renderGallery(data.hits);
    })
    .catch(() => {
      iziToast.error({
        message: 'An error occurred when getting the pictures',
      });
    })
    .finally(() => {
      loader.classList.add('hidden');
    });
});
