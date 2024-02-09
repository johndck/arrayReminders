// Reminder of array methods

// 1. foreach()

// For explanation see the associated README.md file

// 2 examples

console.log(`------ forEach()-------`);

const array = [1, 2, 3, 4, 5];

array.forEach((element, index, array) => {
  console.log(`Element: ${element}, Index: ${index}, Array: ${array}`);
});

// this loops through the array and for each element, shows us the element, its index and prints out the array.

// we can also use the foreach() on node objects in the dom. Here is a useful example:

document.querySelectorAll("p").forEach((p) => {
  p.style.color = "red";
});

console.log(`------ forof()-------`);

// Using the same array above, we can use the forof() method to loop through the array.

for (let value of array) {
  console.log(value);
}

console.log(`------ map()-------`); // 2. map()

const array2nd = [1, 2, 3, 4, 5];

const transformedArray = array2nd.map((element) => {
  return element * 2;
});

console.log(transformedArray); // [2, 4, 6, 8, 10]
