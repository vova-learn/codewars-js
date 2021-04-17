// https://www.codewars.com/kata/is-every-value-in-the-array-an-array

const checkArray = (arr) => {
    let isArray = true;
    for (const value of arr) {
        isArray = Array.isArray(value) ? true : false;
        
        if (!isArray) {
            break;
        }
    }

    return isArray;
}

console.log(checkArray([['string']])); // true
console.log(checkArray([[],{}])); // false
/**
 * You have passed all of the tests! :)
 * 
 * start 19:15 end 19:20
 */