// https://www.codewars.com/kata/playing-with-digits

const getFunnyPropertiesOfNumber = (number, pow) => {
    const integer = String(number).split(``).reduce((acc, item) => {
        return Number(item) ** (pow++) + acc;
    }, 0);

    return integer % number ? -1 : integer / number;
}

console.log(getFunnyPropertiesOfNumber(89, 1)); // 1
console.log(getFunnyPropertiesOfNumber(92, 1)); // -1
console.log(getFunnyPropertiesOfNumber(46288, 3)); // 51
// You have passed all of the tests! :)
// start 23:30 end 23:40