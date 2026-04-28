function createPetal() {
    const petal = document.createElement('div');
    petal.classList.add('petal');

    petal.style.left = Math.random() * window.innerWidth + 'px';
    petal.style.animationDuration = (4 + Math.random() * 4) + 's';

    document.body.appendChild(petal);

    setTimeout(() => {
        petal.remove();
    }, 8000);
}

setInterval(createPetal, 250);

