import { galleryItems } from './gallery-items.js';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);
// Change code below this line
const gallery = document.querySelector('.gallery');
function createGalleryMarkup(items) {
  return items.map(({ preview, original, description}) => {
    return `
      <li class="gallery-item">
        <a class="gallery-link" href="${original}">
          <img
            class="gallery-image"
            src="${preview}"
            alt="${description}"
          />
        </a>
      </li>
    `;
  }).join('');
}
gallery.insertAdjacentHTML('beforeend', createGalleryMarkup(galleryItems));

const lightbox = new SimpleLightbox('.gallery a', { 
      captions: true,
      captionDelay: 250,
      captionsData: 'alt',
      closeBtnCaption: 'Close',
      nextBtnCaption: 'Next',
      prevBtnCaption: 'Previous',
      loadingCaption: 'Loading...',
});
