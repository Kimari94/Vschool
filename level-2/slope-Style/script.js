// to help this function return an array of animals, no matter how many animals are passed to it:

function collectAnimals(...animals) {
    return animals;
}

console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"));
// ["dog", "cat", "mouse", "jackolope", "platypus"]

//===========================================================================//


// Write a function that returns a food object with the array names as properties. You'll use an ES6 shorthand syntax that becomes useful when a variable name is mentioned twice in both the name and value of properties in your object:

function combineFruit(fruit, sweets, vegetables){
    return {fruit, sweets, vegetables}
}

const result = combineFruit(["apple", "pear"], ["cake", "pie"], ["carrot"])


    console.log(result)

//==================================================================================//

// Use destructuring to use the property names as variables. Destructure the object in the parameter:


function parseSentence({location = 'default1', duration = 'default2'}){
    return `We're going to have a good time in ${location} for ${duration}`
  }
  
  console.log(parseSentence({
    location: "Burly Idaho",
    duration: "2 weeks"
  }));

  //====================================================================================//

//   Use array destructuring to make this code ES6:

function returnFirst(items){
    const [firstItem] = items; /*change this line to be es6*/
    return firstItem
}

const items = ['computer', 'monitor'];
console.log(returnFirst(items));

//==========================================================================================//

// Write destructuring code to assign variables that will help us return the expected string. Also, change the string to be using Template literals:

const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr){
    const [firstFav, secondFav, thirdFav] = arr;    

    return "My top three favorite activities are, " + firstFav + ", " + secondFav + ", and " + thirdFav;
}

console.log(returnFavorites(favoriteActivities));

//=======================================================================================//

// Use the Rest and Spread Operator to help take any number of arrays, and return one array. You will need to change how the arrays are passed in. You may write it assuming you will always recieve three arrays if you would like to.


function combineAnimals(...arrays) {
    return arrays.reduce((final, current) => [...final, ...current], []);
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];
const testAnimal = ['unicorn']

console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals, testAnimal));

// ["dog", "cat", "mouse", "jackolope", "platypus"]


//==============================================================================================//

// Try to make the following function more ES6y:

function product(a, b, c, d, e) {
    var numbers = [a,b,c,d,e];
    return numbers.reduce((acc, number) => acc * number, 1) 
}
console.log(product(1, 2, 3, 4, 5));
  

//=================================================================================================//


// Make the following function more ES6y. Use at least both the rest and spread operators:

function unshift(array, ...letters) {
    const joinedLetters = letters.join(' ');
    return [joinedLetters, ...array]
}
  const testUnshift = unshift([1, 2, 3, 4, 5], 'hello', 'there');
  console.log(testUnshift);


//===========================================================================================================//



//   Write some destructuring code to help this function out. Use the ES6 shorthand that helps make the syntax look less redundant to simplify it:



function populatePeople(names){
    return names.map(function(name){
       const [firstName, lastName] = name.split(" ");
        
        return {
            firstName: firstName,
            lastName: lastName
        }
    })
}

console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))
// [
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
// ]