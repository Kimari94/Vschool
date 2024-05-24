var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

vegetables.pop();
console.log('vegetables: ', vegetables);

fruit.shift();
console.log('fruit: ', fruit);

let orange = fruit.indexOf('orange');
console.log(orange);    

fruit.push(orange);

console.log(fruit);

console.log(vegetables.length);

let food  = fruit.concat(vegetables);

console.log(food);

food.splice(4, 2);
console.log(food);

food.reverse();
console.log(food);

let foodString = food.toString()
console.log(foodString);

