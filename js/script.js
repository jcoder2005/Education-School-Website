// =====Nav Scroll======

let nav = document.querySelector('nav');

window.addEventListener('scroll', ()=> {
    nav.classList.toggle('nav-scroll', scrollY>0)
})

// Show/Hide FAQs 

let faqs = document.querySelectorAll('.faq');

faqs.forEach(faq=>{
    faq.addEventListener('click', ()=> {
        faq.classList.toggle('open');
    })

})

//Nav phone menu

let openBtn = document.querySelector('.menu-button');
let closeBtn = document.querySelector('.close-button');
let phoneMenu = document.querySelector('.nav-links');

openBtn.addEventListener('click', ()=> {
    openBtn.style.display='none'
    closeBtn.style.display='inline-block'
    phoneMenu.style.display='block'
});

closeBtn.addEventListener('click', ()=> {
    closeBtn.style.display='none'
    openBtn.style.display='inline-block'
    phoneMenu.style.display='none'
})
