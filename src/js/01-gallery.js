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
img.dataset.source = element.original

link.append(img)
return link

})
gallery.append(...imageList)



const qwas = document.querySelectorAll('.gallery__link img')

qwas.forEach((event)=>{
event.addEventListener("click",()=> {
    basicLightbox.create(`
      <div class="modal">
          <img src=${event.dataset.source}>
    </div>
      `).show()
  })
})