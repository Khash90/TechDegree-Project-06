const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startButton = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');
const ul = document.querySelector('#phrase ul');


let missed = 0;

let phrases = [
    'never give up',
    'hard work works',
    'ez way is the hard way',
    'failure equals learning',
    'jack sparrow',
    'batman is the best'
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



//check if a letter is in the phrase
const checkLetter = Clicked => {
    let match = null ;
    let allLI = document.querySelectorAll('li');

    for (let i = 0 ; i < allLI.length ; i ++) {
        if (Clicked.textContent === allLI[i].textContent) {
            allLI[i].classList.add('show');
            allLI[i].style.transition = 'all .8s ease.in.out';
            match = Clicked.textContent

        }
    }
    return match;
}

//listen for the onscreen keyboard to be clicked
const key = qwerty.addEventListener('click', e => {
    
      if ( e.target.tagName === 'BUTTON'){
        e.target.disabled = true;
        e.target.className = 'chosen';

         let findLetter = checkLetter(e.target);

         if (findLetter === null) {

            const heartLost = document.querySelectorAll('.tries img')[missed];
            heartLost.src = 'images/lostHeart.png';
            missed++;
         }
      }
      checkWin();
});

// reseting game
function resetGame() {
    //reseting hearts
//     if the user wins then
//     clear all li on the page
//     add a new phrase
//     unselect all buttons
//     bring back all the hearts.
//  else if the user loses then
//     bring back the phrase 
//     undo any guessed letters
//     unselect all buttons
//     bring backk all the hearts.
    
    
        overlay.className = 'start';
        
        let allLi = phrase.querySelector('ul'); 
       ul.innerHTML = '';
        missed = 0;
        if (letters.length === shows.length) {
        // allLi.forEach(letter => {
        //     letter.remove();
        // });
        for (let i = 0; i < allLi.length; i++) {
            allLi[i].className = "";
            allLi[i].textContent = "";
          }
         // add a new phrase.
         const newPhrase = getRandomPhraseAsArray(phrases);
         addPhraseToDisplay(newPhrase);
         // reset buttons
         const buttons = document.querySelectorAll('button');
        for (let i = 0 ; i < buttons.length ; i++) {
        buttons[i].disabled = false;
        buttons[i].className = '';
        } 
        
         //reset hearts
         const heartLives = document.querySelectorAll('li.tries');
         for (let i = 0 ; i < heartLives.length ; i++) {
         heartLives[i].firstChild.src = 'images/liveHeart.png';
         }
        } else if(missed > 4) {
            for (let i = 0; i < allLi.length; i++) {
                allLi[i].className = "";
                allLi[i].textContent = "";
              }
             // add a new phrase.
             const newPhrase = getRandomPhraseAsArray(phrases);
             addPhraseToDisplay(newPhrase);
             // reset buttons
             const buttons = document.querySelectorAll('button');
            for (let i = 0 ; i < buttons.length ; i++) {
            buttons[i].disabled = false;
            buttons[i].className = '';
            } 
            
             //reset hearts
             const heartLives = document.querySelectorAll('li.tries');
             for (let i = 0 ; i < heartLives.length ; i++) {
             heartLives[i].firstChild.src = 'images/liveHeart.png';
             }
        }
    
}

//check if the game has been won or lost
const letters = document.getElementsByClassName('letter');
const shows = document.getElementsByClassName('show');
const checkWin = () => {
    
    if (letters.length === shows.length) {
        overlay.classList.add('win');
        overlay.children[0].textContent = 'You Are Smart !!!';
        overlay.style.display = 'flex';
        overlay.children[1].textContent = 'Continue';
        resetGame();
        
    }else if(missed > 4){
        overlay.classList.add('lose');
        overlay.children[0].textContent = 'Failed, Another try?';
        overlay.style.display = 'flex';
        overlay.children[1].textContent = 'Restart';
        resetGame();
    }
}




//listen for the start game button to be pressed
startButton.addEventListener('click', () => {
      overlay.style.display = 'none';
});

