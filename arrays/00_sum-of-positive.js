// https://www.codewars.com/kata/sum-of-positive

const getPositiveNumberSum = (array) => {
    return array.reduce((acc, item) => {
        return item > 0 ? (acc + item) : acc;
    }, 0);
};

console.log(getPositiveNumberSum([1, 13, 56, 89, -5, 2]));
// You have passed all of the tests! :)
// start 22:04 end 22:06