// https://www.codewars.com/kata/544a54fd18b8e06d240005c0

const getMinDigits = (arr, value) => {
    const obj = Object.entries(arr);
    let objValue = null;

    for (const key in obj) {
        if (Number(key) === 0) {
            objValue = key;
            continue;
        }

        if (obj[objValue][1] > obj[key][1]) {
            objValue = key;
            continue;
        }
    };

    if (value === `value`) {
        return obj[objValue][1];
    }

    return Number(obj[objValue][0]);
} 

console.log(getMinDigits([1,23,5], `value`)); // 1
console.log(getMinDigits([1,23,5], `index`)); // 0
console.log(getMinDigits([ 500, 250, 750, 5000, 1000, 230 ], `value`)); // 230
// You have passed all of the tests! :)
// start 14:35 end 14:56