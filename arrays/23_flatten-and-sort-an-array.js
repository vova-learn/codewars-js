// https://www.codewars.com/kata/flatten-and-sort-an-array

// const getSortedArray = (twoDimensionalArray) => {
//     twoDimensionalArray.reduce((acc, items, index) => {
//         let counter = 1;
//         for (let key in items) {
//             key = Number(key);
//             if (items[key] > items[counter] && key < items.length - 1) {
//                 console.log(items[key], items[counter]);
//                 items[counter] = items[key];
//                 items[key] = items[counter];
//                 counter = counter + 1;
//             }
//         }
//         console.log(items);
//     }, []);
// };

// console.log(getSortedArray([[3, 2, 1], [7, 9, 8], [6, 4, 5]])); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
/** 
 * start 21:57 end 22:27
 */

const getSortedArray = (arrays) => {
  // TODO: const array = arrays.flat();

  const array = arrays.reduce((acc, item) => acc.concat(item), []);

  for (let i = 0; i < array.length; i++) {
    let index = i;
    for (let j = index; j < array.length; j++) {
      if (array[index] > array[j]) {
        index = j;
      }
    }

    const item = array[index];
    array[index] = array[i];
    array[i] = item;
  }

  return array;
};

console.log(getSortedArray([
  [3, 2, 1],
  [7, 9, 8],
  [6, 4, 5]
])); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

/** 
 * You have passed all of the tests! :)
 * 
 * start 16:45 end 17:05
 *  */




























// let items = [2, 3, 5, 2, 1];

// for (let i = 0; i < items.length; i++) {
//   let index = i;
//   for (let j = index; j < items.length; j++) {
//     if (items[index] > items[j]) {
//       index = j;
//     }
//   }
//   const item = items[index];

//   items[index] = items[i];
//   items[i] = item;
// }


// items = Object.entries(items);
// for (let i = 0; i < items.length; i++) {
//   let index = i;
//   for (let j = index; j < items.length; j++) {
//     if (items[index][1] > items[j][1]) {
//       index = j;
//     }
//   }
//   const item = items[index];

//   items[index] = items[i];
//   items[i] = item;
// }

// console.log(items);