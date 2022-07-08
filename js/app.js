const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startButton = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');
const ul = document.querySelector('ul');

let numberOfGuesses = 0;

let phrases = [
    'never give up',
    'hard work works',
    'hard way the way to go',
    'failure equals learning'
];


//return a random phrase from an array
const getRandomPhraseAsArray = arr => {

    const randomNumber = Math.floor(Math.random() * phrases.length);
    let phrase = arr[randomNumber];
    return phrase;

}

//adds the letters of a string to the display
const randomPhrase = getRandomPhraseAsArray(phrases);
const addPhraseToDisplay = (arr) => {

      for (let i = 0 ; i < randomPhrase.length ; i++) {
        let text = arr[i];
        const li = document.createElement('li');
        li.textContent = text ;
        ul.appendChild(li);

        if (randomPhrase[i] === ' ') {
            li.className = 'space';
        } else {
            li.className = 'letter';
        }

      }

}
addPhraseToDisplay(randomPhrase);

//check if the game has been won or lost
const checkWin = () => {

}

//listen for the start game button to be pressed
startButton.addEventListener('click', () => {
      overlay.style.display = 'none';
});

//listen for the onscreen keyboard to be clicked
qwerty.addEventListener('click', e => {

});