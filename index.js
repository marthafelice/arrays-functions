// =====================================Question one===================================== 
 

 //Mutating methods are ones that change the object after the method has been used. 
 //Non-mutating methods do not change the object after the method has been used.
      //Mutating array methods
// 1) push(): adds one or more elements to the end of an array
// 2)splice(): adds or removes elements from an array at a specified index
// 3)pop(): removes the last element from an array
// 4)sort(): sorts the elements of an array in place
// 5)shift(): removes the first element from an array

    //Non-Mutating array methods
// 1)map(): returns a new array that contains the results of applying a function to each element in the original array
// 2) concat(): returns a new array that combines two or more arrays
// 3)slice(): returns a new array that is a subset of the original array
// 4)reduce(): returns a single value that is the result of applying a function to each element in the original array  
// 5)filter(): returns a new array that contains only elements that pass a test specified by a callback function

//=====================================Question two =======================================
let languages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python'];

// Add 'Kotlin' to the end of the array
languages.push('Kotlin');

// Add 'Java' after 'Ruby'
languages.splice(3, 0, 'Java');

// Remove the first item in the array
languages.shift();

// Add 'Scala' and 'Swift' to the beginning of the array
languages.unshift('Scala', 'Swift');

// Replace 'PHP' with 'Go' and 'Rust'
let index = languages.indexOf('PHP');
languages.splice(index, 1, 'Go', 'Rust');



//=====================================Question three =======================================

//['apple', 'mango', 'orange'].


//=====================================Question four =======================================

function maximum(numbers) {
  let maxNumber = numbers[0]; // initialize maxNumber to the first element of the array

  // loop through the array and compare each element to maxNumber
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maxNumber) {
      maxNumber = numbers[i];
    }
  }

  return maxNumber;
}
maximum([4, 5, 10, -2]);

//=====================================Question five =======================================


function valTimesIndex(numbers) {
  let result = [];

  for (let i = 0; i < numbers.length; i++) {
    result.push(numbers[i] * i);
  }

  return result;
}

valTimesIndex([6, 7, 8]);
valTimesIndex([9, 10, 12]);
