// https://www.codewars.com/kata/529b54d9aba78c924d00088e/train/javascript

// const getFormatedString = (string, obj) => {
//     for (const key in obj) {
//         console.log(key)
//         const value = `{${String(key)}}`;
//         const re = new RegExp(value, `g`);
//         string = string.replace(re, obj[key]);
//     }
//     return string;
// };

// var obj = { foo : 'Jack', bar : 'sandwich' };
// console.log(getFormatedString('Hello {foo} - make me a {bar}', obj)); 
// console.log(getFormatedString('Hello {foo} - {foobar} make me a {bar}... {foo}!!?', obj));
// console.log(getFormatedString('Hello {0} - {foobar} make me {2} {1} - I\'m full..', ['Jack', 'sandwiches', "0"]));

// start 17:06 end 17:40  - no result


// const getFormatedString = (string, obj) => {
//     let words = string.split(` `);

//     for (const key in obj) {
//         words = words.map((word) => word === `{${key}}` ? obj[key] : word);
//     }

//     return words.join(` `);
// };

// var obj = { foo : 'Jack', bar : 'sandwich' };
// console.log(getFormatedString('Hello {foo} - make me a {bar}', obj)); 
// console.log(getFormatedString('Hello {foo} - {foobar} make me a {bar}... {foo}!!?', obj));
// console.log(getFormatedString('Hello {0} - {foobar} make me {2} {1} - I\'m full..', ['Jack', 'sandwiches', "0"]));

// start 20:15 end 20:19 no result



// const getFormatedString = (string, obj) => {
//     for (const key in obj) {
//         const replacePattern = new RegExp(`{\\b${key}\\b}`, `g`);
//         string = string.replace(replacePattern, obj[key]);
//     }
//     return string;
// };

// var obj = { foo : 'Jack', bar : 'sandwich' };
// console.log(getFormatedString('Hello {foo} - make me a {bar}', obj));
// console.log(getFormatedString('Hello {foo} - {foobar} make me a {bar}... {foo}!!?', obj));
// console.log(getFormatedString('Hello {0} - {foobar} make me {2} {1} - I\'m full..', ['Jack', 'sandwiches', "0"]));

// start 20:24 end 20:59 no result

const getFormatedString = (string, obj) => {
    let readyString = ``;
    for (let word of string.split(` `)) {
        for (const key in obj) {
            if (word.includes(key)) {
                const replaceMask = new RegExp(`{\\b${key}\\b}`, `g`);
                word = word.replace(replaceMask, obj[key]);
                break;
            }
        }
        readyString = readyString ? `${readyString} ${word}` : `${readyString}${word}`;
    }
    return readyString;
}

var obj = { foo : 'Jack', bar : 'sandwich' };
console.log(getFormatedString('Hello {foo} - make me a {bar}', obj));
console.log(getFormatedString('Hello {foo} - {foobar} make me a {bar}... {foo}!!?', obj));
console.log(getFormatedString('Hello {0} - {foobar} make me {2} {1} - I\'m full..', ['Jack', 'sandwiches', "0"]));

//You have passed all of the tests! :)
// start 21:30 end 21:55