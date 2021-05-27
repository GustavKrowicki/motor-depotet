const prevBtns = document.querySelectorAll('.prev');
const nextBtns = document.querySelectorAll('.next');
const openSlideBtns = document.querySelectorAll('.btnOpenSlide') ; // The btns that opens slideshow containers
const slideshowConts = document.querySelectorAll('.slideshowCont'); // All the slideshow containers

var counter = 0

// Looping through each slideshow
for (let i = 0; i < slideshowConts.length; i++){

    let slides = document.querySelectorAll(".slideshow-container" + i + " .mySlides");


    //Btns to open show slideshow
    openSlideBtns.item(i).addEventListener('click', () => {
        slideshowConts.item(i).style.display = 'flex';
    })

    //Next btns 
    nextBtns.item(i).addEventListener('click', () => {
        for (let i = 0; i < slides.length; i++){
            slides.item(i).style.display = 'none';
        }
        counter == slides.length - 1 ? counter = 0 : counter += 1;
        slides.item(counter).style.display = 'block';
    });

    prevBtns.item(i).addEventListener('click', () => {
        for (let i = 0; i < slides.length; i++){
            slides.item(i).style.display = 'none';
        }
        counter == 0 ? counter = slides.length - 1 : counter -= 1;
    
        slides.item(counter).style.display = 'block';
    })
}


const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

const imagess = document.querySelectorAll('.img')
 imagess.forEach(image =>{
  image.addEventListener('click', e =>{
lightbox.classList.add('active')
const img = document.createElement('img')
img.src = image.src 
while (lightbox.firstChild) {
  lightbox.remove.Child(lightbox.firstChild)
}
lightbox.appendChild(img)
  })
 })


 lightbox.addEventListener('click', e => {
   if (e.target !== e.currentTarget) return
   lightbox.classList.remove('active')
 })