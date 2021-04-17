// https://www.codewars.com/kata/57b6f5aadb5b3d0ae3000611

const getMissingArrayLength = (arrays) => {
    if (!arrays || !arrays.length) {
        return 0;
    }

    for (let i = 0; i < arrays.length; i++) {
        let index = i;

        for (let j = index; j < arrays.length; j++) {
            if (!arrays[j]) {
                return 0;
            }

            if (arrays[index].length > arrays[j].length) {
                index = j;
            }
        }

        const array = arrays[index];
        arrays[index] = arrays[i];
        arrays[i] = array;
    };

    for (let i = arrays[0].length ? arrays[0].length : 0, j = 0; i < arrays[arrays.length - 1].length; i++, j++) {
        if (!arrays[j]) {
            return 0;
        }

        if (i !== arrays[j].length && arrays[j].length !== 0) {
            return i;
        } else if (arrays[j].length === 0) {
            return 0;
        }
    }
};

// console.log(getMissingArrayLength([
//     [1, 2],
//     [4, 5, 1, 1],
//     [1],
//     [5, 6, 7, 8, 9]
// ])); //3

// console.log(getMissingArrayLength([
//     [1, 0, 3],
//     [0, 4, 1, 0],
//     [2, 2, 4, 3, 3],
//     [1, 1, 3, 4, 2, 3],
//     [3, 4, 4, 0, 1, 1, 0],
//     [0, 0, 0, 0, 1, 1, 1, 2],
//     [2, 3, 3, 1, 3, 4, 1, 2, 1],
//     [3, 1, 1, 2, 2, 3, 1, 3, 0, 0, 0],
//     [3, 2, 0, 2, 4, 2, 0, 3, 4, 4, 0, 1],
//     [3, 1, 0, 0, 3, 1, 4, 0, 2, 1, 3, 2, 0]
// ])); //10

// console.log(getMissingArrayLength([
//     [],
//     [2],
//     [2, 3],
//     [3, 4, 4],
//     [4, 2, 0, 3, 3],
//     [0, 2, 2, 2, 0, 1],
//     [1, 3, 1, 4, 4, 4, 1],
//     [2, 2, 2, 2, 4, 1, 1, 2],
//     [4, 0, 1, 1, 1, 3, 3, 0, 0],
//     [2, 1, 0, 0, 3, 0, 2, 3, 4, 3]
// ]));

console.log(getMissingArrayLength([
    [1, 2, 2], null
]));

/**
 * start 17:42 end 19:35
 */