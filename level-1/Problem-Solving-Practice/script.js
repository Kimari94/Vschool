let arr = [1, 10, 100];
let arr1 = [2, 24, 54, 23];
let arr2 = [32, 43, 245, 34];


function largestNumber(arr){

    let largest = arr[0]
    for (let i = 0; i < arr.length; i++){
        
        if (largest < arr[i]){
            largest = arr[i];
        }
    }
    return largest 
}


console.log(largestNumber(arr));
console.log(largestNumber(arr1));
console.log(largestNumber(arr2));


// 1 way to complete the function to find words containing special characters.
function lettersWithStrings(arr){
     const specialChars = /[!@#$%^&*({|><,./"})]/;
     const letters = /[a-zA-Z]/;
     return arr.filter(arr => specialChars.test(arr) && letters.test(arr))
}

console.log(lettersWithStrings((["$hello!", "%%^%%", "test!"])));


//secondary way to find words containing special characters.
function lettersWithStrings2(arr, char){
    let result = []
    for (let i = 0; i < arr.length; i++){
        if (arr[i].includes(char)){
            result.push(arr[i]);
        }
    }
    return result;
}


console.log(lettersWithStrings2(["$hello!", "%%^%%", "test!"], '!'))


function divisible(num1, num2){
    let isDivisible = false;
    if (num1 % num2 === 0){
        isDivisible = true
        } 
        return isDivisible
    }

console.log(divisible(4, 2));
console.log(divisible(9, 3));
console.log(divisible(15, 4));
console.log(divisible(47, 3));