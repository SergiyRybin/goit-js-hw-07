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



const galleryImage = document.querySelectorAll('.gallery__link img')
let inst;
const openModal = galleryImage.forEach((event)=>{
event.addEventListener("click",()=> {
inst= basicLightbox.create(`
<div class="modal">
    <img src=${event.dataset.source}>
</div>
`).show()
const modal = document.querySelector(".modal")

// modal.close()
  })
  const closeModal = document.addEventListener("keydown", event =>{
  if(event.code === "Escape")
  modal.remove()
 
  
})
// console.log(modal)

})


// const closeModal = document.addEventListener("keydown", event =>{
//   if(event.code === "Escape")
//   inst.close(()=>
//   console.log(event.code)
//   )
 
  
// })