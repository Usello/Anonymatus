//Javascript do toggle button

const toggleButton = document.getElementsByClassName('toggle-btn')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
});

//Toggle do formulário de contato
const contactCloser = document.querySelector('.close-btn');
const contactOpener = document.querySelector('.contact-toggler');
const contactForm = document.querySelector('.card_box');
const titleContainer = document.querySelector('.container');

//Botão de abrir
contactOpener.addEventListener('click', () => {
    contactForm.classList.add('visible');
    titleContainer.classList.add('invisible')
});

//Botão de fechar
contactCloser.addEventListener('click', () => {
    contactForm.classList.remove('visible');
    titleContainer.classList.remove('invisible');
});

//Fechar ao enviar formulário
function contact_Closer() {
    contactForm.classList.remove('visible');
    titleContainer.classList.remove('invisible');
}