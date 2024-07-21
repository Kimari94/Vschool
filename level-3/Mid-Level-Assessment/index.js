// ### Challenge 1: Sort Array with Preserved Index for -1 Values**

// You are given an array a containing integers. Your task is to implement the solution function to sort the array in ascending order, while preserving the original index positions of -1 values.

// Write a function solution(a) that takes in an array a and returns a new array with the following conditions:

// All non -1 values in the array should be sorted in ascending order.
// The -1 values should retain their original index positions in the sorted array.


function solution(arr){
    let negOne = [];

    // store the index position of all  -1s
    arr.forEach((value, index) => {
        if (value === -1) {
            negOne.push(index);
    };
})
        //remove any instances of -1 from the array
    let filteredArr = arr.filter(value => value !== -1)
        // sort the new arr in ascending order
    filteredArr.sort((a, b) => a - b);

        // put the -1 back in it's orginal position
    negOne.forEach(index => {
        filteredArr.splice(index, 0, -1)
    })

    return filteredArr;
}
    

// console.log(solution([-1, 150, 190, 170, -1, -1, 160, 180]))
// console.log(solution([5, 3, 1]))
// console.log(solution([-1, -1, -1, -1]))
// console.log(solution([100, -1, 50, -1, 75]))




///////////////////////////////////////////////////////////////////////////////////////////////


// ### Challenge 2: **Count Vowels**

// Write a JavaScript function called **`countVowels`** that takes a string as input and counts the number of vowels (a, e, i, o, u) in the string. The function should return the count.

// Implement the **`countVowels`** function using either the provided example solutions or your own solution.

function countVowels(string){
    // converting string to lower case  to make vowel check simpler
    string = string.toLowerCase();
    // storing the vowels in a variable 
    let vowelCount = 0;
    /* using a for loop to itterate over the string and check if each letter is a vowell
     for (let i = 0; i < string.length; i++){
         if (string[i] === 'a' ||string[i] === 'e' || string[i] ==='i' || string[i] ==='o' ||string[i] === 'u'){
             // incrementing the vowel count when one is found
             vowelCount++
         }
     }
     return the final vowel count AFTER the loop
    return vowelCount */
    
    // A MUCH simpler way to accomplish this ----
    for (let char of string){
        if ('aeiou'.includes(char)){
            vowelCount++;
        }
    }
    return vowelCount;
}



const input = 'Counting Vowels';

console.log(countVowels(input)); // Output: 5