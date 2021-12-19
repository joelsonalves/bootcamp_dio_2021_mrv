console.log("Hello World!");


var buttonMenos = document.querySelectorAll('section.contador button')[0];
var buttonMais = document.querySelectorAll('section.contador button')[1];
var contador = document.querySelector('section.contador span');

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


const URL_CAT_API = 'https://thatcopy.pw/catapi/rest/';
const buttonTrocarGato = document.querySelector('section.imagem-de-gato button');
const imagemGato = document.querySelector('section.imagem-de-gato img');

const getImagemGato = async() => {
    const data = await fetch(URL_CAT_API)
    .then(resultado => resultado.json())
    .catch(e => console.log(e.message));

    return data.webpurl;
};

const trocarImagem = async() => {
    imagemGato.src = await getImagemGato(); 
};

buttonTrocarGato.addEventListener('click', trocarImagem);

trocarImagem();