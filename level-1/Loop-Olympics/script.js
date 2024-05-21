for (i = 0; i <= 9; i++){
    console.log(i);
}

for (i = 9; i >= 0; i--){
    console.log(i);
}

const fruit = ["banana", "orange", "apple", "kiwi"];

for (let i = 0; i < fruit.length; i++){
    console.log(fruit[i]);
}

let array = [];

for (let i = 0; i <= 9; i++){
    array.push(i);
}

console.log(array);

for (let i = 0; i <= 100; i++){
    if (i % 2 === 0){
        console.log(i);
    }
}

const fruit1 = ["banana", "orange", "apple", "kiwi", "pear", "peach"];

for (let i = 0; i < fruit1.length; i++){
    if (i % 2 === 0){
        console.log(fruit1[i]);
    }
}

const peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]

  const names = [];
  const occupations = [];
  const oddNames = [];
  const oddOccupations = [];

  for (let i = 0; i < peopleArray.length; i++){
    console.log(peopleArray[i].name);
    names.push(peopleArray[i].name);
    occupations.push(peopleArray[i].occupation);
    if (i % 2 === 0){
        oddNames.push(peopleArray[i].name);
    } if (i % 2 === 1){
        oddOccupations.push(peopleArray[i].occupation);
    }
  }

  console.log(names);
  console.log(occupations);
  console.log(oddNames);
  console.log(oddOccupations);


const arrayOfArrays = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]

let combinedArray = []

for (let i = 0; i < arrayOfArrays.length; i++){
    combinedArray.push(arrayOfArrays[i]);
}

console.log(combinedArray);


let newArray = []
for (let i = 0; i < arrayOfArrays.length; i++){
    let combinedArray1 = [];
    for (let j = 0; j < arrayOfArrays.length; j++){
        combinedArray1.push(i);
    }
    newArray.push(combinedArray1);
}

console.log(newArray);

let newArray1 = []

for (let i = 0; i < 3; i++){
    let combinedArray2 = [];
    for (let j = 0; j < 3; j++){
        combinedArray2.push(j);
    }
    newArray1.push(combinedArray2);
}

console.log(newArray1);

let newArray2 = [];

for (let i = 0; i < 3; i++){
let combinedArray3 = []
    for (let j = 0; j < 3; j++){
        combinedArray3.push('x');
        }
    newArray2.push(combinedArray3);
}

console.log(newArray2);
