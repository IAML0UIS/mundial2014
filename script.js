const slideContainer = document.querySelector('.slide-container');

function slideNext() {
  slideContainer.style.transform = 'translateX(-100%)';
}

function slidePrev() {
  slideContainer.style.transform = 'translateX(0)';
}

// Intervalo de tiempo para cambiar automáticamente de imagen (opcional)
setInterval(slideNext, 1000000);
