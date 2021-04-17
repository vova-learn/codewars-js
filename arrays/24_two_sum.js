// https://www.codewars.com/kata/52c31f8e6605bcc646000082/train/javascript

const getSumNumbersIndex = (numbers, target) => {
    // const array = [];

    // for (let i = 0; i < numbers.length; i++) {
    //     let index = i === numbers.length ? i : i + 1;
    //     for (let j = index; j < numbers.length + 1; j++) {
    //         if (numbers[i] + numbers[j] === target) {
    //             array.push(i, j);
    //         }
    //     }
    // }

    // return array;

    return numbers.reduce((acc, item, i, array) => {
        let index = i === numbers.length ? i : i + 1;
        for (let j = index; j < array.length; j++) {
            item + numbers[j] === target ? acc.push(i, j) : acc;
        }

        return acc;
    }, []);
}

console.log(getSumNumbersIndex([1, 2, 3, 2], 4)); // [0,2]

/**
 * You have passed all of the tests! :)
 * 
 * start 17:17 end 17:29 - for
 * start 17:32 end 17:37 - reduce
 *  */