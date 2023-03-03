import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const ulEl = document.querySelector('.gallery');

function creatItemsMarkup () {
    const picture = galleryItems.map(({preview, original, description})=> {
    return `
           <a class="gallery__item" href="${original}">
         <img
           class="gallery__image"
           src="${preview}"
           
           alt="${description}"
         />
       </a>`;
    }).join('');
    ulEl.insertAdjacentHTML('beforeend', picture)
    };
    
    creatItemsMarkup ();
    
    ulEl.addEventListener('click', onClick);
    
    function onClick (event) {
        if(event.target.nodeName !== 'IMG') {
          return;
        }
        console.log(event.target.nodeName);
        event.preventDefault();

        let lightbox = new SimpleLightbox('.gallery a', { captionDelay:"${description}" });

    };
