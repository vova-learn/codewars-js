// https://www.codewars.com/kata/square-every-digit

const getSquareDigits = (number) => {
    return Number(String(number).split(``).reduce((acc, item) => {   
        return `${acc}${item ** 2}`;
    }, ``));
};

console.log(getSquareDigits(23)); // 4
// You have passed all of the tests! :)
// start 22:35 end 21:42