var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
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