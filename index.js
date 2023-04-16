import { getResistorOhms } from './resistor.js';

const selector = document.querySelector('.selection');
let bands = { color1: 'red', color2: 'green', multiplier: 'violet', tolerance: 'gold' };

selector.addEventListener('click', function(event) {
    let place = event.target.parentNode.id;
    if (place === 'color0' || place === 'color1' || place === 'color2' || place === 'color3') {
        const color = event.target.classList[1];
        if (place === 'color0') {
            bands.color1 = color;
        }
        else if (place === 'color1') {
            bands.color2 = color;
        }
        else if (place === 'color2') {
            bands.multiplier = color;
        }
        else if (place === 'color3') {
            bands.tolerance = color;
        }
        resistorUpdate(`b${place.replace(/[^\d]/g, '')}`, color);
    }
})

function resistorUpdate(id, color) {
    document.getElementById(id).style.backgroundColor = `var(--${color}`;
    document.querySelector('.answer').textContent = getResistorOhms(bands);
}