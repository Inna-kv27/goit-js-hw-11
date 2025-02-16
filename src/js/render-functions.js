import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
let lightbox;

export function renderImages(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
            <li class="gallery-item">
                <div class="gallery">
                    <a href="${largeImageURL}">
                        <img class="gallery-image" src="${webformatURL}" alt="${tags}" loading="lazy">
                    </a>
                </div>

                <div class="info">
                    <p><b>Likes:</b> ${likes}</p>
                    <p><b>Views:</b> ${views}</p>
                    <p><b>Comments:</b> ${comments}</p>
                    <p><b>Downloads:</b> ${downloads}</p>
                </div>
            </li>
        `
    )
    .join('');

  gallery.innerHTML = markup;

  if (!lightbox) {
    lightbox = new SimpleLightbox('.gallery a');
  }
  lightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
  if (lightbox) {
    lightbox.destroy();
    lightbox = null;
  }
}
