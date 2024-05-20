var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"];
var computerCount = 0;  

for (let i = 0; i < officeItems.length; i++){
    if (officeItems[i] === 'computer'){
        computerCount++;
    }
}

console.log('Number of computers ' + computerCount);


//-----------------------------------------------------------//

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ]
  
  for (let i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++ ){
    let pronoun;

    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age <= 17){
        pronoun = peopleWhoWantToSeeMadMaxFuryRoad[i].gender === 'male' ? 'him' : 'her';
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + ` is not old enough to see the movie don't let ${pronoun}`);
    } else {
        pronoun = peopleWhoWantToSeeMadMaxFuryRoad[i].gender === 'male' ? 'him' : 'her';
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + ` is old enough to see the movie let ${pronoun} in to see it.`);
    }
  }

  // --------------------------------------------------------------------------------------------//


  toggleArray = [2, 5, 435, 4, 3];
  toggleArray1 = [1, 1, 1, 1, 3];
  toggleArray2 = [9, 3, 4, 2];
  

  function checkLightStatus(toggleArray){
    let isLightOn = false;
    let toggles = 0;

    for (let i = 0; i < toggleArray.length; i++){
        toggles += toggleArray[i]
        if (toggles % 2 === 1){
            isLightOn = true;
        } else {
            isLightOn = false;
        }
    }
    if (isLightOn) {
        console.log('The light is on');
    } else {
        console.log('The light is off');
    }
  }

  checkLightStatus(toggleArray);
  checkLightStatus(toggleArray1);
  checkLightStatus(toggleArray2);