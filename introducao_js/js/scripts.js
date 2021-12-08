var buttonMenos = document.querySelectorAll('section.contador button')[0];
var buttonMais = document.querySelectorAll('section.contador button')[1]
var contador = document.querySelector('section.contador span')

console.log("Hello World!");

buttonMenos.addEventListener('click', () => {
    if (contador.textContent > 0) {
        contador.textContent = (parseInt(contador.textContent) - 1).toString();
    }
});

buttonMais.addEventListener('click', () => {
    if (contador.textContent < 10) {
        contador.textContent = (parseInt(contador.textContent) + 1).toString();
    }
});