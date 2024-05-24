const readlineSync = require("readline-sync");

function playGame(){
    let inventory = [];
    const options = ['key', 'door', 'hole'];
    let playAgain = true

    const userName = readlineSync.question('May I have your name? ');
    console.log('Hi ' + userName + '! I have some terrible news for you!! It appears you are stuck in this room and there are only 3 options for you! You can either find a key, stick your hand in a whole, or try to open the door. What would you like to try first?');



    while (playAgain) {
        const index = readlineSync.keyInSelect(options, 'What would you like to try?');


    if (index === 0) {
        inventory.push('Key');
        console.log('You have found the key! Great Job! What would you like to do next?');
    
    } else if (index === 1) {
    if (inventory.includes('Key')) {
        console.log('You have unlocked the door and escaped! You WIN!');
        playAgain = false;
    } else {
        console.log('You have tried to open the door but it appears to be locked!');
    }
    } else if (index === 2) {
    console.log('Uh oh! You have stuck your hand in the hole and perished! Game Over!');
    playAgain = false;
    }


    }

    const answer = readlineSync.keyInYNStrict('Do you want to play again?');
    if (!answer) {
        playAgain = false
        console.log('Game over. Goodbye, ' + userName + '!');
     } else { 
        playAgain = true
        playGame();
     }
}

playGame();
