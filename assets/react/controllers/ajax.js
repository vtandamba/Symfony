window.addEventListener('load', function() {
    // Lorsque la page est entièrement chargée, cacher le loader
    document.getElementById('loader').classList.remove('show');
});


const numCubes = 50;

function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
}

const body = document.querySelector('.hero');

for (let i = 0; i < numCubes; i++) {
    const cube = document.createElement('div');
    cube.classList.add('cube');

    const randomX = randomInRange(0, window.innerWidth);
    const randomY = randomInRange(0, window.innerHeight);

    cube.style.left = `${randomX}px`;
    cube.style.top = `${randomY}px`;

    // Ajouter aléatoirement la classe "red" ou "blue" à chaque cube
    if (Math.random() < 0.5) {
        cube.classList.add('red');
        cube.classList.add('up');

    } else {
        cube.classList.add('blue');
        cube.classList.add('down');
        cube.classList.add('rotate');
    }



    const delay = randomInRange(0, 5) * 1000;
    cube.style.animationDelay = `${delay}ms`;

    body.appendChild(cube);
}


//
document.addEventListener('DOMContentLoaded', function() {
    const toggleButtons = document.querySelectorAll('.toggle-details .label__titre');

    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const details = this.closest('.intitule').querySelector('.details');
            details.classList.toggle('collapsed');
        });
    });
});
//
const articles = document.querySelectorAll('.intitule');

articles.forEach(article => {
    const label = article.querySelector('.label');
    const image = article.querySelector('.petiteImage');
    const detail = article.querySelector('.details__description');

    label.addEventListener('click', () => {
        console.log('ccc')

        image.classList.toggle('hide');
        detail.classList.toggle('hide');

    });
});
