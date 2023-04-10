// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

// First create a describe stament that contains the function "shuffle"
// Create an it statement that explains how the function remove the first item of the array and shuffle the remaining content
// Create two expect statements that take in the variables provided as arguments that will return our expected outcome


// describe ("shuffle", () => {
//   it ("will take in an array and remove the first item and shuffle the remaining data", () => {
//       expect (shuffle(colors1)).toEqual(["yellow", "blue", "pink", "green"])
//       expect (shuffle(colors2)).toEqual(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"])
      
//   })
// })


// Good failure


// const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
// const colors2 = [
//   "chartreuse",
//   "indigo",
//   "periwinkle",
//   "ochre",
//   "aquamarine",
//   "saffron"
// ]
// // Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

// // b) Create the function that makes the test pass.

// First Declare a new funtion called "shuffle" that will take in an array as a parameter
// create a variable within the function called "newArray" that will remove the first item in the array using the ".shift" method
// create another variable called "finalArray" that will take in the the "NewArray" variable (without the first item) and adjust the order of the content using the ".sort" method
// return the "finalArray" variable

// const shuffle = (array) => {
//   let newArray = array.shift()
//   let finalArray = newArray.sort()
//   return finalArray
// } 

// I was not able to get this test to pass but I met the criteria for what the function needed to do. Is this because the function sorts the items in the array?



// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.


// First create a describe stament that contains the function "voteChecker"
// Create an it statement that explains how the function will take in an object and determine the number of votes
// Create two expect statements that take in the variables provided as arguments that will return our expected outcome

// describe ("voteChecker", () => {
//   it("will take in an object as a parameter and determine the number of votes", () => {
//       expect(voteChecker(votes1)).toEqual(11)
//       expect(voteChecker(votes2)).toEqual(-31)
      
//   })
// })

// Good Failure

// const votes1 = { upVotes: 13, downVotes: 2 }
// // Expected output: 11
// const votes2 = { upVotes: 2, downVotes: 33 }
// // Expected output: -31

// // b) Create the function that makes the test pass.

// First create a new function called "votechecker"
// Create a variable called "upVotes" that will take in the value of the key "upVotes"
// Create another variable called "downvotes" that will take the value of the key "downVotes"
// Create another variable called "totalVotes" that will subtract the values of the upVotes and the downVotes
// return our variable "totalVotes"

// const voteChecker = (object) => {
//   var upVotes = object.upVotes || 0
//   var downVotes = object.downVotes || 0
//   var totalVotes = upVotes - downVotes
//   return totalVotes
// }

// Test passed

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

// First create a describe stament that contains the function "arrayCombo"
// Create an it statement that explains how the function will take in two arrays and combine them with any duplicate values
// Create an expect statement that take in the variables provided as arguments that will return our expected outcome

// describe ("arrayCombo", () => {
//   it("will take in two arrays as a parameter and combine them without any duplicate values", () => {
//       expect(arrayCombo(dataArray1,dataArray2)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"]
//       )
      
      
//   })
// })

// Good failure

// const dataArray1 = ["array", "object", "number", "string", "Boolean"]
// const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
// // Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

// // b) Create the function that makes the test pass.

// First create a new function called "arrayCombo" that takes in multiple arrays and parameters using the spread operator
// Next create a variable called "joinedArray" that will combine the two arrays provided and store them into a different array
// Next create another variable called "finalArray" that will remove the duplicated by converting the array into a set and then return the items (without duplicates) back into an array using the "Array.from" method
// return the "finalArray"

// const arrayCombo = (...array) => {
//   var joinedArray = [].concat(...array)
//   var finalArray = Array.from(new Set(joinedArray))
//   return finalArray
// }

// Test passed

// This was a bit tricky and I had to use methods I was notfamiliar with, was there another way I could have went about completing this task?
