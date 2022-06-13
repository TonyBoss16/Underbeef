'use strict';
var btn = document.querySelector('.header__btn');
var nav = document.querySelector('.header__nav');
var rrss = document.querySelector('.header__rrss');
var claim = document.querySelector('.footer__extra');
claim.addEventListener('click', function () {
    claim.classList.toggle('active');
});
/*
    Cuando hago click en .header__btn
        .header__nav ToggerClass 'activo'
        .header__rrss ToggerClass 'activo'

*/
btn.addEventListener('click', function () {
    nav.classList.toggle('activo');
    rrss.classList.toggle('activo');
});
