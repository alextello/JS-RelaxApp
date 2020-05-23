const container = document.getElementById('container');
const text = document.getElementById('text');

const tiempoTotal = 7500;
const respirarTiempo = (tiempoTotal / 5) * 2;
const sostener = tiempoTotal / 5;

respirarAnimacion();

function respirarAnimacion() {
    text.innerText = 'Inhala';
    container.className = 'container grow';
    setTimeout(() => {
        text.innerText = 'Sostiene';
        setTimeout(() => {
            text.innerText = 'Exhala';
            container.className = 'container shrink';
        }, sostener);
    }, respirarTiempo);
}

setInterval(respirarAnimacion, tiempoTotal);