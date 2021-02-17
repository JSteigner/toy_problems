const alternatingSort = (a, alternatedArray = []) => {
  if(!a.length) return isSorted(alternatedArray);

  if(a.length === 1) { 
    alternatedArray.push(a[0]) 
  } else {
      alternatedArray.push(a[0], a[a.length - 1]);
      a = a.slice(1);
  }
  return alternatingSort(a.slice(0, -1), alternatedArray);
}

const isSorted = (a) => {
  for(const [i, num] of a.entries()){
    if(num > a[i + 1]) return false;
  }
  return true;
}

console.log(alternatingSort([1,3,5,6,4,2,5])); // false