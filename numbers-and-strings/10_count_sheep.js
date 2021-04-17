// https://www.codewars.com/kata/5b077ebdaf15be5c7f000077/train/javascript

const getSheepCount = (count) => {
    const arr = [];
    
    for (let i = 1; i <= count; i++) {
        arr.push(`${i} sheep...`);
    }
    return arr.join(``);
};


console.log(getSheepCount(2)); // 1 sheep...2 sheep...
// You have passed all of the tests! :)
// start 16:00 end 17:02