// https://www.codewars.com/kata/create-phone-number

const getNumberMask = (arr) => {
    const code = arr.splice(0, 3);
    const number = arr.splice(0, 3);
    return `(${code.join([``])}) ${number.join([``])}-${arr.join([``])}`;
};

console.log(getNumberMask([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // (123) 456-7890
// You have passed all of the tests! :)