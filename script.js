const hamburger=document.querySelector('.hamburger');
const nav=document.querySelector('#nav-top');
hamburger.addEventListener('click',()=>{
    nav.classList.toggle('open')
})