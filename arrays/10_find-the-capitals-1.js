// https://www.codewars.com/kata/find-the-capitals-1

const getUpperCaseIndex = (string) => {
    return string.split(``).map((item, index) => {
        if (!(item === item.toLowerCase())) {
            return index;
        }
    }).filter((item) => item === 0 ? true : item);
}

console.log(getUpperCaseIndex(`CodEWaRs`)); // [0,3,4,6]
// You have passed all of the tests! :)
// start 16:55 end 17:07