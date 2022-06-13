'use strict'

const btn = document.querySelector('.header__btn') as HTMLButtonElement;
const nav = document.querySelector('.header__nav') as HTMLElement;
const rrss = document.querySelector('.header__rrss') as HTMLUListElement;
const claim = (document.querySelector('.footer__extra') as HTMLParagraphElement);

claim.addEventListener('click', ():void => {
    claim.classList.toggle('active');
});

/*
    Cuando hago click en .header__btn 
        .header__nav ToggerClass 'activo' 
        .header__rrss ToggerClass 'activo'

*/
    btn.addEventListener('click', () => {
        nav.classList.toggle('activo');
        rrss.classList.toggle('activo');
    })