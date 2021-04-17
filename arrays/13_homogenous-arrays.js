// https://www.codewars.com/kata/homogenous-arrays

const getValidArrays = (dimensionalArray) => {
    return dimensionalArray.reduce((acc, items) => {
        if (!items.length) {
            return acc;
        }
        let isValidType = true;
        let itemType = typeof items[0];
        for (const item of items) {
            if (itemType !== typeof item) {
                isValidType = false;
            }
        }
        return isValidType ? [...acc, items] : acc;
    }, []);
}

console.log(getValidArrays([[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]])); // [[1, 5, 4], ['b']]

/**
 * You have passed all of the tests! :)
 * 
 * start 00:55 end 01:10;
 */