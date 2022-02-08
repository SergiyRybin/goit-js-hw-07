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



const galleryImage = document.querySelector('.gallery')


const openModal = element => {
  console.log(element)
  element.preventDefault()
  if(element.target.nodeName === "IMG"){
 const intanse = basicLightbox.create(`<div class="modal">
    <img src=${element.target.dataset.source} width = 900vw >
    </div>
    `)
    intanse.show()

const divBox = document.querySelector(".basicLightbox")
    document.addEventListener("keydown", event =>{
      if(event.code === "Escape")
      intanse.close()
      onClose: (intanse) => {};
      event.stopPropagation()
})}}
galleryImage.addEventListener("click", openModal)
   