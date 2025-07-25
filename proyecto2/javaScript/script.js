const tarjetas = document.querySelector('.tarjetas');
const images = document.querySelectorAll('.tarjetas img');
const puntosContainer = document.getElementById('puntos');
let currentIndex = 0;

//para Crear los puntitos
images.forEach((_, i) => {
    const puntos = document.createElement('span');
    puntos.addEventListener('click', () => goToSlide(i));
    puntosContainer.appendChild(puntos);
});

const puntos = puntosContainer.querySelectorAll('span');

function updateSlider() {
    tarjetas.style.transform = `translateX(-${currentIndex * 100}%)`; /*para el puntito principal*/
    puntos.forEach(puntos => puntos.classList.remove('active'));
    puntos[currentIndex].classList.add('active');
}

function goToSlide(index) {
    currentIndex = index;
    updateSlider();
}

function autoSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
}

updateSlider();
setInterval(autoSlide, 3000); // chicos esto es para que Cambia cada 3 segundos

/* script para perfil */
    const desglose = document.getElementById('desglose')
    const perfil = document.getElementById('perfil')

    desglose.addEventListener('click', function(){
        perfil.classList.toggle('hiden')
    })



