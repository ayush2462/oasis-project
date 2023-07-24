// Activate Menu Button
let menuBtn = document.querySelector('#menu-btn');
let menuBar = document.querySelector('.menu-bar');

menuBtn.onclick = ()=> {
    menuBtn.classList.toggle('fa-brands-x');
    menuBar.classList.toggle('active');
}

window.onscroll = () => {
    menuBtn.classList.remove('fa-brands-x');
    menuBar.classList.remove('active');
}

ScrollReveal({
    reset: true,
    distance: '100px',
    duration: 2000,
    delay: 200
});

ScrollReveal().ScrollReveal('.home-bio h1, .about-resume',  {origin: 'left'});
ScrollReveal().ScrollReveal('.home-bio p',  {origin: 'right'});
ScrollReveal().ScrollReveal('.home-bio, .heading',  {origin: 'top'});
ScrollReveal().ScrollReveal('.profile-pic, .about-items, .skills-items, .project-items, .form',  {origin: 'bottom'});

const animText = new Typed ('animated-text', {
    strings: ['Web Developer', 'Copy Writer','Cricketer'],
    backSpeed: 100,
    typeSpeed: 100,
    backDelay: 600,
    loop: true

});