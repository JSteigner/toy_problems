const allLongestStringsAlternate = (inputArray) => {
  const maxSize = Math.max(...inputArray.map(string => string.length));
  return inputArray.filter(string => string.length === maxSize);
}
console.log(allLongestStringsAlternate(["aba", "aa", "ad", "vcd", "aba"])); //  ["aba", "vcd", "aba"]. 

// const allLongestStrings = (inputArray) => {
//   const longestStringLength = longestStringLengthFinder(inputArray);
//   const longestStrings = [];
//   inputArray.forEach(string => {
//     if (string.length === longestStringLength) longestStrings.push(string);    
//   });
//   return longestStrings;
// }

// const longestStringLengthFinder = (inputArray) => {
//   let longestStringLength = 0;
//   inputArray.forEach(string => {
//     if (string.length > longestStringLength) longestStringLength = string.length;    
//   });
//   return longestStringLength;
// }

// console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"])); //  ["aba", "vcd", "aba"]. 



