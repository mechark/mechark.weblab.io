document.addEventListener('DOMContentLoaded', nav)
function nav(){
    const toggle = document.querySelector('.toggle');
    const nav = document.querySelector('.nav');
    const links = document.querySelector('.nav-links')
    toggle.addEventListener('click', ()=>{
        nav.classList.toggle('show')
        links.classList.toggle('show')
    })
}

$(function() {
    $('.micro img').hover(function() {
      $('.micro').css('background-color', '#558ABB');
    }, function() {
      // on mouseout, reset the background colour
      $('.micro').css('background-color', '');
    });
  });