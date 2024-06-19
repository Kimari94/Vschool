
//Write a function that takes an array of numbers and returns a new array with the numbers sorted in ascending order.


function sortNumbers(numbers) {
    // the function takes the numbers array and sorts it by comparing numbers to put them in ascending order.
    return numbers.sort((final, current) => final - current) 
}                                           


// Example usage:
const numbers = [4, 2, 7, 1, 9, 5];
const sortedNumbers = sortNumbers(numbers);
console.log(sortedNumbers);  // Output: [1, 2, 4, 5, 7, 9]



// Write a function that takes an array of strings and returns a new array where each string is converted to uppercase.


function convertToUppercase(strings) {
    return strings.map(function(string) { // the map method calls the function assigned on every element within the array.
        return string.toUpperCase();  //the toUpperCase method is being applied to each element within the array individually.
    });    
}



// Example usage:
const strings = ['hello', 'world', 'javascript'];
const uppercaseStrings = convertToUppercase(strings);
console.log(uppercaseStrings);  // Output: ['HELLO', 'WORLD', 'JAVASCRIPT'

