import { galleryItems } from './gallery-items.js';
// Change code below this line


const gallery = document.querySelector(".gallery")

const imageList = galleryItems.map( element=>{

const link = document.createElement("a")
link.classList.add("gallery__item")
link.href = element.original

const img = document.createElement("img")
img.classList.add("gallery__image")
img.src = element.preview
img.alt = element.description

link.append(img)
return link
})

gallery.append(...imageList)



let ga = new SimpleLightbox('.gallery a', {
  caption: true,
  captionsData: 'alt',
  captionDelay: 250,
})
