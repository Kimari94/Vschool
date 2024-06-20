// Using the provided `peopleArray` (bottom of this article), write a function that:

// 1. Returns a list of everyone older than 18, which is
// 2. sorted alphabetically by last name, and where
// 3. each name and age is embedded in a string that looks like an HTML `<li>` element.

var peopleArray = [
   {
       firstName: "Sarah",
       lastName: "Palin",
       age: 47
   },
   {
       firstName: "Frank",
       lastName: "Zappa",
       age: 12
   },
   {
       firstName: "Rick",
       lastName: "Sanchez",
       age: 78
   },
   {
       firstName: "Morty",
       lastName: "Smith",
       age: 29
   },
   {
       firstName: "Kyle",
       lastName: "Mooney",
       age: 27
   },
   {
       firstName: "Pasha",
       lastName: "Datsyuk",
       age: 13
   },
   {
       firstName: "Lev",
       lastName: "Tolstoy",
       age: 82
   }
]

const newPeople = [{
    firstName: 'David',
    lastName: 'Bowen',
    age: 17
},
{
    firstName: 'Cynthia',
    lastName: 'Rosales',
    age: 31
}]

function sortedOfAge(arr){
    let newArr = [...arr, ...newPeople]

    let secondArr = newArr.filter(person => person.age > 18)

    secondArr.sort(function(a, b){
            if (a.lastName < b.lastName){
                return -1
            } 
            if (a.lastName > b.lastName){
                return 1
            }
            return 0
         })
  
     return secondArr
    }
 
 console.log(sortedOfAge(peopleArray));

 /*
 Output:
 [
     "<li>Kyle Mooney is 27</li>",
     "<li>Sarah Palin is 47</li>",
     "<li>Rick Sanchez is 78</li>",
     "<li>Morty Smith is 29</li>",
     "<li>Lev Tolstoy is 82</li>"
 ]
 */
 


 // function that filters out people's name who include a Y or an A. (returns empty because all names contain y or a)
 function noYorA(arr){
    let newArr = [...arr, ...newPeople]
    let secondArr = newArr.filter(function(item) {
        
        //checks first and last name to see if they contain a 'y' or an 'a'
    const firstNoYorA = item.firstName.toLowerCase().includes('y') || item.lastName.toLowerCase().includes('a'); 
    const lastNoYorA = item.firstName.toLowerCase().includes('a') || item.lastName.toLowerCase().includes('y');
    
    //returns the object if the variables are false
    return !firstNoYorA && !lastNoYorA 
  });
  return secondArr;
}

 console.log(noYorA(peopleArray));
 






 function noEndYorA(arr){
     let newArr = [...arr, ...newPeople]
     let secondArr = newArr.filter(function(item){
        const lastName = item.lastName.toLowerCase(); // convert last name to all lower case to remove case sensitivity
        const lastLetter = lastName.charAt(lastName.length - 1); // target the last letter of the last name
        return lastLetter !== 'y' && lastLetter !== 'a'; // return if the last letter isn't 'y' or 'a'
    });
    return secondArr;
 }

 console.log(noEndYorA(peopleArray));
