// https://www.codewars.com/kata/insert-dashes

const getNumberWithDash = (number) => {
    const numbers = String(number).split(``);
    let prevIndex = 0;

    return numbers.reduce((acc, item, index, arr) => {
        if (item % 2 === 1 && arr[prevIndex] % 2 === 1 && index !== 0) {
            acc.push(`-`);
            prevIndex = index;
        }
        prevIndex = index
        acc.push(item);
        return acc;

    }, []).join(``); u
}

console.log(getNumberWithDash(82954843)); // `829-54843`
console.log(getNumberWithDash(123456)); // `123456`
console.log(getNumberWithDash(1003567)); // `1003567`
// You have passed all of the tests! :)
// start 17:11 end 17:13
// start 17:27 end 17:35
// start 22:48 end 23:56