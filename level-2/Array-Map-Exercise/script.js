function doubleNumbers(arr){
    let doubledArr = []
    for(let i = 0; i < arr.length; i++){
        doubledArr.push(arr[i] * 2)
    }
    return doubledArr;
}

console.log(doubleNumbers([2, 5, 100]));

function stringItUp(arr){
    let arrString = [];
    for (let i = 0; i < arr.length; i++){
        arrString.push(arr[i].toString());
    }
    return arrString;
}

console.log(stringItUp([2, 5, 100]));



//4) Make an array of strings of the names

function namesOnly(arr){
    nameString = [];
    for (let i = 0; i < arr.length; i++){
        nameString.push(arr[i].name);
    }
    return nameString;
  }
  


  console.log(namesOnly([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ]));



// Make an array of strings of the names saying whether or not they can go to The Matrix

  function makeStrings(arr){
    for (let i = 0; i < arr.length; i++){
        result = []
        if (arr[i].age >= 18){
            return result.push(`${arr[i].name} can go to the matrix`);
        } else {
            return result.push(`${arr[i].name} is under age!!`);
        }
    }
    return result;
  }
  
  console.log(makeStrings([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
]));


// Make an array of the names in h1s, and the ages in h2s //


function readyToPutInTheDOM(arr){
    let htmlArr = [];
    for (let i = 0; i < arr.length; i++){
        arr[i].htmlName = `<h1>${arr[i].name}</h1>` 
        arr[i].htmlAge = `<h2>${arr[i].age}</h2>`
        htmlArr.push(arr[i].htmlName, arr[i].htmlAge);
    }
    return htmlArr;
  }

  console.log(readyToPutInTheDOM([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
])); 