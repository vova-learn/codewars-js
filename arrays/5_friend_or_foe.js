// https://www.codewars.com/kata/55b42574ff091733d900002f

const getFriends = (arr) => {
    return arr.filter((item) => item.length === 4);
};

console.log(getFriends(["Ryan", "Kieran", "Mark"])); // ["Ryan", "Mark"]
// You have passed all of the tests! :)
// start 23:00 end 23:01