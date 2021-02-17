const allLongestStrings = (inputArray) => {
  const longestStringLength = longestStringLengthFinder(inputArray);
  const longestStrings = [];
  inputArray.forEach(string => {
    if (string.length === longestStringLength) longestStrings.push(string);    
  });
  return longestStrings;
}

const longestStringLengthFinder = (inputArray) => {
  let longestStringLength = 0;
  inputArray.forEach(string => {
    if (string.length > longestStringLength) longestStringLength = string.length;    
  });
  return longestStringLength;
}

// console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"])); //  ["aba", "vcd", "aba"]. 
