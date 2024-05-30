const readlineSync = require("readline-sync");
let inventory = ['sword', 'sheild', 'mysterious potion'];
let health = 100
let userName;
let win = 0
const options = ['Run', 'Fight'];


let enemies = [
    {
        name: 'Undead Bandit',
        health: 20,
        weapon: 'skeleton hands',
        inventory: ['10 gold',]
    },

    {
        name: 'Ugly Troll',
        health: 20,
        weapon: 'club',
        inventory: ['club', 'loin cloth'],
    },

    {
        name: 'Giant Spider',
        health: 25,
        weapon: 'fangs',
        inventory: ['poison vial']
    }
]




//game introduction//
function playGame() {
    console.log('Stranger: Greetings, and welcome to your final quest adventurer.');
    userName = readlineSync.question('Tell me, what is your name adventurer?');
    console.log(`Stranger: ahh, ${userName}, a fine name for an adventurer to be sure! This will be your final quest before retirement... So.. Do try not to die, okay?`);
    console.log(`Now then, ${userName} on this adventure you can use "w" to walk or "p" to view your current status and inventory. Be careful though. Sometimes you may encounter enemies while walking! Well... ${userName} What are you waiting for?! Lets go!!`);

    let playAgain = true
    while (playAgain) {
        let key = readlineSync.keyIn('', { hideEchoBack: true, mask: '', limit: 'wp' });
        if (key === 'w') {
            walkForward();
        } else if (key === 'p') {
            console.log(`${userName} has ${health} health remaining and has ${inventory.join(', ')} in their inventory`);
        }
    }


    

    if (health <= 0){
        console.log('You have died... and right before retirement... Yikes');
        if (readlineSync.keyInYN('Play Again [Y/N]')) {
            playGame();
        } else {
            playAgain = false;
            console.log('Thanks for playing!')
        }
    }
}

    function walkForward() {
        let walk = Math.floor(Math.random() * 3)
        if (walk < 1) {
            console.log('You walk forward through the wilderness.');
        } else if (walk >= 1) {
            let enemy = enemies[Math.floor(Math.random() * 3)];
            if (enemy.health > 0) {
                console.log(`You encounter ${enemy.name}.`);
                encounter(enemy);
            } else {
                console.log("You think you heard something... Must've been the wind...");
            }
        }
    }

        function encounter(enemy) {
            while (health > 0 && enemy.health > 0) {
                const index = readlineSync.keyInSelect(options, 'What would you like to do?')
                let run = Math.floor(Math.random() * 3)
                if (index === 0) {
                    if (run === 0) {
                        let enemyAttack = Math.floor(Math.random() * 5);
                        health -= enemyAttack
                        console.log(`${userName} ran away, but took ${enemyAttack} damage.`);
                        return;
                    } else if (run === 1) {
                        console.log(`${userName} Ran away. ${enemy.name} attacked, but missed`);
                        return
                    } else {
                        console.log(`${userName} Tried to run away, but tripped.`)
                    }
                } else if (index === 1) {
                    let enemyAttack = Math.floor(Math.random() * 5);
                    let playerAttack = Math.floor(Math.random() * 5);
                    health -= enemyAttack;
                    enemy.health -= playerAttack;
                    console.log(`${enemy.name} attacked ${userName} for ${enemyAttack} damage. ${userName} has ${health} health remaining.`);
                    console.log(`${userName} attacked ${enemy.name} for ${playerAttack} damage ${enemy.name} has ${enemy.health} health remaining.`);    
                  }
                }
                
                if (enemy.health <= 0) {
                    console.log(`${userName} has defeated ${enemy.name} and gained 5 health.`);
                    console.log(`${userName} looted ${enemy.inventory.join(', ')}`)
                    inventory.push.apply(inventory, enemy.inventory);
                    win++
                    health += 5
                  }
                 
                  if (win === 3) {
                      console.log('You have arrived at your destination and completed your quest');
                      if (readlineSync.keyInYN('Play Again?')) {
                          playGame();
                      } else {
                          playAgain = false;
                          console.log('Thanks for playing!')
                      }
                  }
              }
              
              playGame();
                    
                      
    
            







