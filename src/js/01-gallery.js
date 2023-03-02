import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
//---------------------1-part-------
const galeryEl = document.querySelector('.gallery'); 
console.log(galeryEl);

function creatItemsMarkup () {
const picture = galleryItems.map(({preview, original, description})=> {
return `
<div class="gallery__item">
   <a class="gallery__link" href="${original}">
     <img
       class="gallery__image"
       src="${preview}"
       data-source="${original}"
       alt="${description}"
     />
   </a>
</div>`;
}).join('');
galeryEl.insertAdjacentHTML('beforeend', picture)
};

creatItemsMarkup ();
//--------------------2-part---------------
galeryEl.addEventListener('click', onClick);

function onClick (event) {
  if(event.target.nodeName !== 'IMG') {
    return;
  }
  console.log(event.target.nodeName);

  
const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
` );
//event.stopPropagation();
instance.show()
//instance.show(() => console.log('lightbox now visible'));
//instance.close(() => console.log('lightbox not visible anymore'));
}









