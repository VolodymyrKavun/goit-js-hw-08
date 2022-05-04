// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import imageCardTpl from '../templates/image-card.hbs';

import imagesCardsTpl from '../templates/images-cards.hbs';

import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

/**
 *  Отримання доступу до елементів
 */
const refs = {
  gallery: document.querySelector('.gallery'),
};

/**
 * Константа усіх елементів галереї
 */
const galleryMarkup = createCardsImageMarkup(galleryItems);

/**
 * Функція створення розмітки елементів галереї
 */
function createCardsImageMarkup(cards) {
  return imagesCardsTpl(galleryItems);
}

/**
 * Додавання розмітки в DOM
 */
refs.gallery.insertAdjacentHTML('beforeend', galleryMarkup);

/**
 * SimpleLightbox
 */

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
