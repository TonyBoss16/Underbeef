const claim = (document.querySelector('.footer__extra') as HTMLParagraphElement);

claim.addEventListener('click', ():void => {
    claim.classList.toggle('active');
})