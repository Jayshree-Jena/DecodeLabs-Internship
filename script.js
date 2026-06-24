
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    navbar.classList.toggle('active');
    menuIcon.classList.toggle('bx-x');
};

document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(link.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        navbar.classList.remove('active');
        menuIcon.classList.remove('bx-x');
    });
});

document.querySelector('.contact-form').addEventListener('submit', e => {
    e.preventDefault();
    alert("Thank you for contacting us! We'll reply soon.");
});
