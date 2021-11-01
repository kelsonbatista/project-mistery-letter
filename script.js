// Ref Split phrase - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split

// create letter
const divLetter = document.querySelector('#carta-gerada');
const inputField = document.querySelector('#carta-texto');
const btnGenerate = document.querySelector('#criar-carta');
let countWord = 0;

btnGenerate.addEventListener('click', () => {
  const phrase = inputField.value;
  const splitPhrase = phrase.split(' ');
  console.log(countWord);
  if (countWord > 0) {
    for (let i = 1; i <= countWord; i += 1) {
      divLetter.lastElementChild.remove();
      console.log(`apagou ${i}`);
    }
    countWord = 0;
  }
  for (let i = 0; i < splitPhrase.length; i += 1) {
    const divWord = document.createElement('span');
    divWord.className = 'word';
    divWord.innerHTML = splitPhrase[i];
    divLetter.appendChild(divWord);
    countWord += 1;
  }
  inputField.value = ' ';
});
