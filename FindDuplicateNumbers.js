function findDuplicates(array) {
  array.sort(); // Sort the array

  const duplicates = [];

  for (let i = 0; i < array.length - 1; i++) {
      if (array[i] === array[i + 1]) { // If current element is equal to the next one
          if (!duplicates.includes(array[i])) { // If it's not already in duplicates array
              duplicates.push(array[i]); // Add it to duplicates array
          }
      }
  }

  return duplicates;
}

const array = [1, 2, 3, 2, 4, 5, 4, 5];
const duplicates = findDuplicates(array);

console.log(duplicates);
