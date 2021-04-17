// https://www.codewars.com/kata/magic-index

const getMagicIndex = (array) => {
    let result = -1;
    for (let key in array) {
        key = Number(key);
        if (key === array[key]) {
            result = key;
            break;
        }
    }
    
    return result;
}


console.log(getMagicIndex([-20,-10,2,10,20])); // 2
console.log(getMagicIndex([6, 5, 83, 5, 3, 18])); // -1
console.log(getMagicIndex([])); // -1
/**
 * You have passed all of the tests! :)
 * 
 * start 21:41 end 21:51
 */