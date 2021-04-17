// https://www.codewars.com/kata/583203e6eb35d7980400002a

const getSmileCount = (arr) => {
    let counter = 0;
    let isValidSmile = true;

    for (const value of arr) {
        if (value.length === 2) {
            value[0] === `:` || value[0] === `;` ? true : isValidSmile = false;
            value[1] === `)` || value[1] === `D` ? true : isValidSmile = false;
            
            isValidSmile ? ++counter : (isValidSmile = true);
            continue;
        }

        if (value.length === 3) {
            value[0] === `:` || value[0] === `;` ? true : isValidSmile = false;
            value[1] === `-` || value[1] === `~` ? true : isValidSmile = false;
            value[2] === `)` || value[2] === `D` ? true : isValidSmile = false;
            
            isValidSmile ? ++counter : isValidSmile = true;
            continue;
        }
    }

    return counter;
}

/**
 * valid smile:
 * : or ;
 * - or ~
 * ) or D 
*/

console.log(getSmileCount([':D',':~)',';~D',':)'])); // 4
console.log(getSmileCount([ ':-)', ';~D', ':-D', ':_D' ])); // 3
console.log(getSmileCount([])); // 0
// You have passed all of the tests! :)
// start 00:35 end 00:49