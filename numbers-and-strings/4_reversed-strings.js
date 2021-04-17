// https://www.codewars.com/kata/reversed-strings

// ***
const getReversString = (string) => {
    let letters = new Array();
    for (let i = string.length; i >= 0; i--) {
        letters.push(string[i]);
    }

    return letters.join(``);
}

// ***
// const getReversString = (string) => {
//     let letters = new Array();
//     for (const letter of string) {
//         letters.unshift(letter);
//     }

//     return letters.join(``);
// }

// ***
// const getReversString = (string) => {
//     return string.split(``).reverse().join(``);
// }

console.log(getReversString(`siska`)); // aksis