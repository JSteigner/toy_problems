// create a function that takes in a string 
// return a string in alphabetical order
const alphabetize = (string, order) => {
  let string1 = string.split('');
  let sortedString = string1.sort((a, b) => a - b);
  console.log(sortedString);
  // console.log(string.split('').sort((a, b) => a - b));
  // console.log(string.charCodeAt(string));
  // create storage for codes
  // let storage = [];
  // // iterate through the input string
  // string.split('').forEach((letter, i) => {
  //   // keep track if each letter's charCode
  //   storage.push(string.charCodeAt(i));
  // }); 
  // // sort in ascending order
  // storage.sort((a, b) => a - b);
  // // convert code back to letters
  // // iterate over storage to turn code back to characters
  // let finalArray = [];
  // storage.forEach(code => {
  //   finalArray.push(String.fromCharCode(code));
  // });
  // console.log(finalArray.join(''));
  // return finalArray.join('');
}

// const charMapFunc = (order) => {
//   // make char map
//   let charMap = {}
//   // iterate over order
//   order.split('').forEach((letter, i) => {
//     // assign each letter as a value and keys will be 0-23
//     charMap[i] = letter;
//   });
//   return charMap;
// }

const alphabetize2 = (string, order) => {
  const charMap = charMapFunc(order);
 
  let sortedArray= [];
  // iterate over string
  string.split('').forEach(letter => {
    // find value of the letter that matches the charMap
    for (let key in charMap) {
      if (charMap[key] === letter) {
        // check for duplicates
        if (sortedArray[key] === letter) {
          // if found insert one index over
          sortedArray.splice(+key + 1, 0, letter);
        }
        // place letter at corresponding index(key)    
        sortedArray[key] = letter;
      }
    }
  });
  return sortedArray.join('');
}

const charMapFunc = (order) => {
  // make char map
  let charMap = {}
  // iterate over order
  order.split('').forEach((letter, i) => {
    // assign each letter as a value and keys will be 0-23
    charMap[i] = letter;
  });
  return charMap;
}

alphabetize2('newaperio', 'abcdefghijklmnopqrstuvwxyz');
// aeeinoprw



// alphabetize('newaperio');