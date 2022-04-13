//Javascript do toggle button

const toggleButton = document.getElementsByClassName('toggle-btn')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

const contact = document.getElementById('#contato');
contact.addEventListener('click', ()=>{
    if(document.getElementById('#contact_card').style.cssText= {display: none}){
        document.getElementsByClassName('contact_card').display=flex;
    }
})
// Animação TypeWritter para introdução do nível
