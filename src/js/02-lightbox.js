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
           data-source="${original}"
           alt="${description}"
         />
       </a>`;
    }).join('');
    ulEl.insertAdjacentHTML('beforeend', picture)
    };
    
    creatItemsMarkup ();
    function onClick (event) {
        if(event.target.nodeName !== 'IMG') {
          return;
        }
        console.log(event.target.nodeName);
      
        
    //   const instance = basicLightbox.create(`
    //       <img src="${event.target.dataset.source}" width="800" height="600">
    //   ` );
    //   //event.stopPropagation();
    };
