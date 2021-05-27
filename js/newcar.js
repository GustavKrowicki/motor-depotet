//opel
var opel = document.querySelector(".opel-flexbox");
var opelDesk = document.querySelector(".opel-flexbox-desk");

function opelFunction(){
  if (window.innerWidth > 768) {
    opelDesk.style.display === "none" ? opelDesk.style.display = "flex" : opelDesk.style.display = "none";
    suzukiDesk.style.display === "none" ? suzukiDesk.style.display = "none" : suzukiDesk.style.display = "none";
    mitsubishiDesk.style.display === "none" ? mitsubishiDesk.style.display = "none" : mitsubishiDesk.style.display = "none";
  } else {
    opel.style.display === "none" ? opel.style.display = "block" : opel.style.display = "none";
    mitsubishi.style.display === "none" ? mitsubishi.style.display = "none" : mitsubishi.style.display = "none";
    suzuki.style.display === "none" ? suzuki.style.display = "none" : suzuki.style.display = "none";
  }
}

//mitsubishi
var mitsubishi = document.querySelector(".mitsubishi-flexbox");
var mitsubishiDesk = document.querySelector(".mitsubishi-flexbox-desk");

function mitsubishiFunction(){
  if (window.innerWidth > 768) {
    mitsubishiDesk.style.display === "none" ? mitsubishiDesk.style.display = "flex" : mitsubishiDesk.style.display = "none";
    opelDesk.style.display === "none" ? opelDesk.style.display = "none" : opelDesk.style.display = "none";
    suzukiDesk.style.display === "none" ? suzukiDesk.style.display = "none" : suzukiDesk.style.display = "none";
  } else {
    mitsubishi.style.display === "none" ? mitsubishi.style.display = "block" : mitsubishi.style.display = "none";
    suzuki.style.display === "none" ? suzuki.style.display = "none" : suzuki.style.display = "none";
    opel.style.display === "none" ? opel.style.display = "none" : opel.style.display = "none";
  }
}

//suzuki
var suzuki = document.querySelector(".suzuki-flexbox");
var suzukiDesk = document.querySelector(".suzuki-flexbox-desk");

function suzukiFunction(){
  if (window.innerWidth > 768) {
    suzukiDesk.style.display === "none" ? suzukiDesk.style.display = "flex" : suzukiDesk.style.display = "none";
    mitsubishiDesk.style.display === "none" ? mitsubishiDesk.style.display = "none" : mitsubishiDesk.style.display = "none";
    opelDesk.style.display === "none" ? opelDesk.style.display = "none" : opelDesk.style.display = "none";
  } else {
    suzuki.style.display === "none" ? suzuki.style.display = "block" : suzuki.style.display = "none";
    opel.style.display === "none" ? opel.style.display = "none" : opel.style.display = "none";
    mitsubishi.style.display === "none" ? mitsubishi.style.display = "none" : mitsubishi.style.display = "none";
  }
}


