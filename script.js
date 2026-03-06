/* ===== TYPING EFFECT ===== */

const typingElement = document.getElementById("typing");

if(typingElement){

const text="Protecting organizations from cyber threats.";

let i=0;

function typing(){

if(i<text.length){

typingElement.innerHTML+=text.charAt(i);

i++;

setTimeout(typing,40);

}

}

typing();

}


/* ===== IMAGE SLIDER ===== */

let slides = document.querySelectorAll(".slide");

if(slides.length > 0){

let index = 0;

function showSlides(){

slides.forEach(slide => slide.classList.remove("active"));

index++;

if(index >= slides.length){
index = 0;
}

slides[index].classList.add("active");

}

setInterval(showSlides,4000);

}


/* ===== MOBILE MENU ===== */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if(menuToggle && navLinks){

menuToggle.addEventListener("click", () => {

navLinks.classList.toggle("active");

});

}


/* ===== LOAD NAVBAR ===== */

fetch("navbar.html")
.then(response => response.text())
.then(data => {

document.getElementById("navbar").innerHTML = data;

});


/* ===== LOAD FOOTER ===== */

const footerContainer = document.getElementById("footer");

if(footerContainer){

fetch("footer.html")
.then(response => response.text())
.then(data => {
footerContainer.innerHTML = data;
});

}


/* ===== PORTFOLIO CAROUSEL ===== */

function slideRight(){

const track = document.getElementById("carouselTrack");

if(track){

track.scrollBy({
left:330,
behavior:"smooth"
});

}

}

function slideLeft(){

const track = document.getElementById("carouselTrack");

if(track){

track.scrollBy({
left:-330,
behavior:"smooth"
});

}

}
function slideRight(btn){

const track = btn.parentElement.querySelector(".carousel-track");

track.scrollBy({
left:350,
behavior:"smooth"
});

}

function slideLeft(btn){

const track = btn.parentElement.querySelector(".carousel-track");

track.scrollBy({
left:-350,
behavior:"smooth"
});

}
function openModal(img,title,desc){

document.getElementById("imgModal").style.display="block";

document.getElementById("modalImg").src=img;

document.getElementById("modalTitle").innerText=title;

document.getElementById("modalDesc").innerText=desc;

}

function closeModal(){

document.getElementById("imgModal").style.display="none";

}
