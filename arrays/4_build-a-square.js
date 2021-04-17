// https://www.codewars.com/kata/59a96d71dbe3b06c0200009c

const getShapeSquare = (number) => {
    const side = `+`;
    let shapeSide = ``;
    let shapeSides = [];

    for (let i = 0; i < number; i++) {
        shapeSide = `${shapeSide}${side}`;
    }

    for (let i = 0; i < number; i++) {
        shapeSides.push(shapeSide);
    }

    return shapeSides.join(`\n`);
};

console.log(getShapeSquare(2)); // ++\n++
// You have passed all of the tests! :)
// start 22:45 end 22: 56