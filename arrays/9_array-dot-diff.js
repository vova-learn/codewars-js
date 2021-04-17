// https://www.codewars.com/kata/array-dot-diff

const getDiffArray = (arr, arrWithDigit) => {
    return arr.filter((item) => {
        if (arrWithDigit.length > 0) {
            if (!arrWithDigit.includes(item)) {
                return item === 0 ? true : item;
            }
        } else {
            return arr;
        }
    });
}

console.log(getDiffArray([3,4], [3])); // [4]
console.log(getDiffArray([1,8,2], [])); // [1,8,2]
console.log(getDiffArray([1,2,3], [1,2])); // [3]
console.log(getDiffArray([8,12,8,6,9,-2,17,-3,7,-19,15,-13,-11,-20,-18,-17,7,-10,0,-20],[-17,7,-20])); // [3]
// You have passed all of the tests! :)
// start 15:02 end 15:24