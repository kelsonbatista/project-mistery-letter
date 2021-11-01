// Ref Split phrase - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// Ref check whitespace https://stackoverflow.com/questions/1731190/check-if-a-string-has-white-space

// create letter
const divLetter = document.querySelector('#carta-gerada');
const inputField = document.querySelector('#carta-texto');
const btnGenerate = document.querySelector('#criar-carta');
let countWord = 0;

function validLetter(text) {
  const splitPhrase = text.split(' ');
  if ((text === '') || (/^\s+$/.test(text))) {
    const divWord = document.createElement('span');
    divWord.className = 'error';
    divWord.innerHTML = 'Por favor, digite o conteúdo da carta.';
    divLetter.appendChild(divWord);
    countWord += 1;
  } else {
    for (let i = 0; i < splitPhrase.length; i += 1) {
      const divWord = document.createElement('span');
      divWord.className = 'word';
      divWord.innerHTML = splitPhrase[i];
      divLetter.appendChild(divWord);
      countWord += 1;
    }
  }
}

btnGenerate.addEventListener('click', () => {
  const phrase = inputField.value;
  if (countWord > 0) {
    for (let i = 1; i <= countWord; i += 1) {
      divLetter.lastElementChild.remove();
    }
    countWord = 0;
  }
  validLetter(phrase);
});
