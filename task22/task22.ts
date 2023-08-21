const myArray = [1, 2, 3, 4, 5];

const indexToAccess = 10;
console.log(myArray[indexToAccess]); 
if (indexToAccess >= 0 && indexToAccess < myArray.length) {
  console.log(myArray[indexToAccess]);
} else {
  console.log("Index is out of bounds");
}