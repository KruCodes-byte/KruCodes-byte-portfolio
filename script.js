/* ===== TYPING EFFECT ===== */

const typingElement = document.getElementById("typing");

if(typingElement){

const text="Web Developer | Tech Educator | Creator";

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

function slideRight(btn){

const track = btn.parentElement.querySelector(".carousel-track");

track.scrollBy({
left:330,
behavior:"smooth"
});

}

function slideLeft(btn){

const track = btn.parentElement.querySelector(".carousel-track");

track.scrollBy({
left:-330,
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

/* ===== SCROLL REVEAL ANIMATIONS ===== */

document.addEventListener("DOMContentLoaded", () => {
    const reveals = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add("active");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    });

    reveals.forEach(reveal => {
        revealObserver.observe(reveal);
    });
});


/* ===== 3D CARD TILT EFFECT ===== */
const tiltCards = document.querySelectorAll('.neon-card, .featured-card, .service-card');

tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * -10; // Max tilt 10deg
        const rotateY = ((x - centerX) / centerX) * 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)`;
        card.style.transition = 'transform 0.5s ease';
    });
    
    card.addEventListener('mouseenter', () => {
        card.style.transition = 'none'; // Disable transition during hover for instant tracking
    });
});

