// 💻 Challenges

// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt.
// Don't forget to pseudo code.

// Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.

const testArr1 = [3, 9, 15, 4, 10]
// output: [9, 27, 45, 12, 30]

// Pseudo

// Input:array of numbers
// Output:array with all numbers multiplied by 3

// Process
// Declare a function called arrayTimesThree
// Declare newArray equal to []
// Use for loop to iterate through each number and multiply by three
// Set loop to start at 1, end at array.length, and increments of 1
// use newArray.push to add all values of original array * 3
// return newArray (outside of for loop)

const arrayTimesThree = (array) => {
  let newArray = []
  for(let i = 0; i < array.length; i++){
    newArray.push(array[i] * 3)
  }
  
  return newArray 
}
console.log(arrayTimesThree(testArr1))

// Output:[ 9, 27, 45, 12, 30 ]

// Write a function that takes in an array of numbers and returns a new array with only odd numbers.

const testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]
// output: [-7, 3, 5, 13]

// Pseudo

// Input:array
// Output:new array with only odd numbers

// Process
// Declare an function oddsOnly
// Declare a variable called oddNums
// Use a for loop to iterate through each array element
// set a condition for the array index value to strictly not equal modulo of 2
// oddNums push new array index values
// Return oddNums (outside of loop)
// Call the function with the given variable as the argument

const oddsOnly = (array) => {
  let oddNums = []
  for(let i = 0; i < array.length; i++){
  if (array[i] % 2 !== 0){
    oddNums.push(array[i])
}
   } return oddNums
} 
console.log(oddsOnly(testArr2))
// Output:[ -7, 3, 5, 13 ]

// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method.

const comboArr = [
  7,
  "n",
  true,
  "i",
  "c",
  10,
  "e",
  -388,
  "w",
  3,
  "o",
  0,
  "r",
  false,
  "k"
]
// output: "nicework"

// Pseudo

// Input: array (nums, string)
// Output: string with only the letters

// Process
// Declare a func lettersOnly
// Declare a new array called letters with no elements in array []
// use for loop
// Set the condition of typeof === "string"
// return letters
// console.log lettersOnly for given variable (outside for loop)
let lettersOnly = (value) => {
    if (typeof(value) === "string"){
   return value
  }
}
 let letters = comboArr.filter(lettersOnly).join(" ")
 console.log(letters)

// Output:nicework

// first attempt:

// const lettersOnly = (array) => {
//   let letters = []
//   for(let i = 0; i < array.length; i++){
//     if(array[i] === "string"){
//       letters.push(array[i])
//     }
//   } return letters
// }
// console.log(lettersOnly(typeof "string"))


// Create a function that takes in an array of numbers and returns the sum.

const addThese1 = [1, 2, 3, 4]
// output: 10

const addThese2 = []
// output: 0

// Pseudo

// Input:array
// Output: the sum of all the numbers in that array

// Process
// Declare a function called sumOf
// Declare a new variable called sum as a place holder = nums
// Use a for loop to iterate, and add all the numbers together
// Write the condition for [i] + [i]
// return sum
// call the func with the argument of addThese1 and addThese2

// const sumOf = array.reduce((total, num) => total + num, 0)
// console.log(sumOf(addThese1))
// console.log(sumOf(addThese2))
console.log([1, 2, 3, 4].reduce((a, b) => a + b, 0))
// Output:10
console.log([].reduce((a, b) => a + b, 0))
// Output:0


// Create a function that takes in an array of numbers and returns the index of the largest number.

const indexHighestNumber = [1, 4, 2, 3]
// output: 1


// Pseudo

// Input:array
// Output:index of largest number

// Process
// create a function called largestIndex
// use filter to iterate through each value in the array to find the largest value
// Return Index of largest value


  const largestIndex = indexHighestNumber.indexOf(Math.max(...indexHighestNumber))

console.log(largestIndex) 
// Output: [1]

// 🏔 Stretch Goals

// Create a function that takes in two arrays and returns one array with no duplicate values.

const arr1 = [3, 7, 10, 5, 4, 3, 3]
const arr2 = [7, 8, 2, 3, 1, 5, 4]
// output: [3, 7, 10, 5, 4, 8, 2, 1]

// Pseudo

// Input:
// Output:

// Process
// 

// Create a function that takes in two numbers as arguments and returns an array the length of the first number filled with the second number.

// const arrayLength = 6
// const arrayValue = 0
// // output: [0, 0, 0, 0, 0, 0]

// const arrayLength = 4
// const arrayValue = 11
// output: [11, 11, 11, 11]

// Pseudo

// Input:
// Output:

// Process
// 

// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function.

const addUp1 = 4
// 1 + 2 + 3 + 4 = 10
// output: 10

const addUp2 = 10
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55
// output: 55

const addUp3 = 600
// output: 180300

// Pseudo

// Input:
// Output:

// Process
// 
