/*
const carouselImages = document.getElementById('carousel_images');
const carouselImages2 = document.getElementById('carousel_images2');
const carouselImages3 = document.getElementById('carousel_images3');
const images = document.querySelectorAll('#carousel_images img');
const images2 = document.querySelectorAll('#carousel_images2 img');
const images3 = document.querySelectorAll('#carousel_images3 img');
const carouselButtons = document.querySelectorAll('.carousel_button');
const numberOfImages = document.querySelectorAll('#carousel_images img').length;
const numberOfImages2 = document.querySelectorAll('#carousel_images2 img').length;
const numberOfImages3 = document.querySelectorAll('#carousel_images3 img').length;
let imageIndex = 1;
let translateX = 0;
let imageIndex2 = 1;
let translateX2 = 0;
let imageIndex3 = 1;
let translateX3 = 0;
carouselButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    if (event.target.id === 'previous') {
      if (imageIndex !== 1) {
        imageIndex--;
        translateX += 700;
      }
    } else {
      if (imageIndex !== numberOfImages) {
        imageIndex++;
        translateX -= 700;
      }
    }
    
    carouselImages.style.transform = `translateX(${translateX}px)`;
    images.forEach((image, index) => {
      if (index === imageIndex - 1) {
        image.classList.add('active');
      } else {
        image.classList.remove('active');
      }
    });
  });
});



carouselButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    if (event.target.id === 'previous') {
      if (imageIndex2 !== 1) {
        imageIndex2--;
        translateX2 += 700;
      }
    } else {
      if (imageIndex2 !== numberOfImages2) {
        imageIndex2++;
        translateX2 -= 700;
      }
    }
    
    carouselImages2.style.transform = `translateX(${translateX}px)`;
    images2.forEach((image, index) => {
      if (index === imageIndex - 1) {
        image.classList.add('active');
      } else {
        image.classList.remove('active');
      }
    });
  });
});



carouselButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    if (event.target.id === 'previous') {
      if (imageIndex3 !== 1) {
        imageIndex3--;
        translateX3 += 700;
      }
    } else {
      if (imageIndex3 !== numberOfImages) {
        imageIndex3++;
        translateX3 -= 700;
      }
    }
    
    carouselImages3.style.transform = `translateX(${translateX}px)`;
    images3.forEach((image, index) => {
      if (index === imageIndex3 - 1) {
        image.classList.add('active');
      } else {
        image.classList.remove('active');
      }
    });
  });
});


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


 document.getElementById("size").addEventListener("click", movanoFunction);

function movanoFunction(){
  if(onclick) {
    carouselImages.style.display = 'none';
 
  } else {
    carouselImages.style.display = "flex";
    carousel_images2.style.display = 'none';
    carousel_images3.style.display = 'none';
   
  }
}


document.getElementById("size2").addEventListener("click", enkeltFunction);

function enkeltFunction(){
  if(onclick) {
    carousel_images2.style.display = 'none';
  } else {
    carousel_images2.style.display = "flex";
    carouselImages.style.display = 'none';
    carousel_images3.style.display = 'none';
  }
}

document.getElementById("size3").addEventListener("click", dobbeltFunction);

function dobbeltFunction(){
  if(onclick) {
    carousel_images3.style.display = 'none';
  } else {
    carousel_images3.style.display = "flex";
    carousel_images2.style.display = 'none';
    carouselImages.style.display = 'none';
  }
}

//############################
//############################
//############################

*/

// ny movano slider
/*
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
};


function displayFirst(){
  document.querySelector(".slideshow-container").style.display = "flex";
  document.querySelector(".prev").style.display = "flex";
  document.querySelector(".next").style.display = "flex";
  document.querySelector(".slideshow-container1").style.display = "none";
  document.querySelector(".slideshow-container2").style.display = "none";
}
/*
console.log(document.querySelector(".slideshow-container"))

function displaySecond(){
  document.querySelector(".slideshow-container").style.display = "none";
  document.querySelector(".prev").style.display = "flex";
  document.querySelector(".next").style.display = "flex";
  document.querySelector(".slideshow-container1").style.display = "flex";
  document.querySelector(".slideshow-container2").style.display = "none";
}

console.log(document.querySelector(".slideshow-container1"))

function displayThird(){
  document.querySelector(".slideshow-container").style.display = "none";
   document.querySelector(".prev").style.display = "flex";
  document.querySelector(".next").style.display = "flex";
  document.querySelector(".slideshow-container1").style.display = "none";
  document.querySelector(".slideshow-container2").style.display = "flex";
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
 */

