import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery")

const imageList = galleryItems.map( element=>{

const link = document.createElement("a")
link.classList.add("gallery__link")

const img = document.createElement("img")
img.classList.add("gallery__image")
img.src = element.preview
img.alt = element.description

link.append(img)
return link

})
gallery.append(...imageList)


document.querySelector('gallery__link').onclick = () => {

	basicLightbox.create(`
		<img width="1400" height="900" src="galleryItems.original">
	`).show()
}