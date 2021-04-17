// https://www.codewars.com/kata/make-a-square-box

const getBox = (size) => {
    const shape = `-`;
    const box = [];

    for (let i = 0; i < size; i++) {
        if (i === 0 || i === size - 1) {
            const boxSide = [];
            for (let j = 0; j < size; j++) {
                boxSide.push(shape);
            }
            box.push(boxSide.join(``));
        } else {
            const boxInSide = [];
            for (let j = 0; j < size; j++) {
                if (j === 0 || j === size - 1) {
                    boxInSide.push(shape);
                } else {
                    boxInSide.push(` `);
                }
            }
            box.push(boxInSide.join(``));
        }
    }

    return box;
}

console.log(getBox(5));
console.log(getBox(2));
console.log(getBox(3));

/**
 * You have passed all of the tests! :)
 * 
 * start 19:24 end 19:34
 */