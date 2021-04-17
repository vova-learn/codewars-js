// https://www.codewars.com/kata/shortest-word

const getMinLenghtWord = (string) => {
    return string.split(` `).reduce((acc, item, index) => {
        if (index) {
            return item.length < acc ? item.length : acc;
        } else {
            return item.length;
        }
    }, 0);
};

console.log(getMinLenghtWord(`bit coin take over the world maybe who knows perhaps`)); // 3

// You have passed all of the tests! :)
// start 22:12 end 22:20;