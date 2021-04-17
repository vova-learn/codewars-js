// https://www.codewars.com/kata/list-filtering

const getFilterArray = (arr) => {
    return arr.filter((item) => typeof item === `number` && item >= 0);
};

console.log(getFilterArray([1,2,'a','b'])); // [1,2];
console.log(getFilterArray([1,2,'aasf','1','123',123])); // [1,2,123];
// You have passed all of the tests! :)
// start 22:24 end 22:32
