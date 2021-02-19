const removeDuplicates = (string) => {
  return string.split('').filter((letter, index) => string.indexOf(letter) === index);
}