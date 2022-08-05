// xs: array
// returns: a new array, with unique items
function removeDuplicates(xs) {
  return [...new Set(xs)];
}

console.log("Input: [1, 2, 1, 4, 3, 2]");
console.log("Unique Filtered: " + removeDuplicates([1, 2, 1, 4, 3, 2]));
