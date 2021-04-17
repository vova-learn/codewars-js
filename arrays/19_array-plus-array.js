// https://www.codewars.com/kata/array-plus-array

const getSum = (arrayA, arrayB) => {
    return [...arrayA, ...arrayB].reduce((acc, item) => item + acc, 0);
}

console.log(getSum([1, 2, 3], [4, 5, 6])); // 21
/**
 * You have passed all of the tests! :)
 * 
 * start 19:06 end 19:08
 */