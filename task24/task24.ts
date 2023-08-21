let fruit = 'apple';
let age = 25;
let numbers = [1, 2, 3, 4, 5];
console.log("Is fruit == 'apple'? I predict True.");
console.log(fruit == 'apple');

console.log("Is fruit == 'banana'? I predict False.");
console.log(fruit == 'banana');

console.log("Is fruit.toLowerCase() == 'APPLE'? I predict True.");
console.log(fruit.toLowerCase() == 'apple'); 

console.log("Is fruit.toLowerCase() == 'Orange'? I predict False.");
console.log(fruit.toLowerCase() == 'orange'); 

console.log("Is age === 25? I predict True.");
console.log(age === 25); 

console.log("Is age !== 30? I predict True.");
console.log(age !== 30); 

console.log("Is age > 18? I predict True.");
console.log(age > 18); 

console.log("Is age < 21? I predict False.");
console.log(age < 21);  
console.log("Is age >= 25? I predict True.");
console.log(age >= 25); 

console.log("Is age <= 20? I predict False.");
console.log(age <= 20); 

console.log("Is age > 20 and age < 30? I predict True.");
console.log(age > 20 && age < 30); 

console.log("Is age > 30 or age < 20? I predict True.");
console.log(age > 30 || age < 20);

console.log("Is 3 in numbers? I predict True.");
console.log(numbers.includes(3)); 

console.log("Is 6 in numbers? I predict False.");
console.log(numbers.includes(6)); 

console.log("Is 4 not in numbers? I predict False.");
console.log(!numbers.includes(4)); 

console.log("Is 8 not in numbers? I predict True.");
console.log(!numbers.includes(8)); 