// https://www.codewars.com/kata/scrolling-text

const getScrollingText = (string) => {
    let dynamicWord = null;
    let counter = 0;
    const array = [];

    while(string.length > counter) {
        string =  string.split(``).reduce((acc, item, index, arr) => {
            if (!index) {
                dynamicWord = item.toUpperCase();
            } else {
                acc.push(item.toUpperCase());
                if (index === arr.length - 1) {
                    acc.push(dynamicWord);
                }
            }
            return acc;
        }, []).join(``);

        if (counter === string.length - 1) {
            array.unshift(string);
        } else {
            array.push(string);
        }

        ++counter;
    }

    return array;
}

console.log(getScrollingText(`abc`));
console.log(getScrollingText(`Hello world!`));
/**
 * You have passed all of the tests! :)
 * 
 * start 18:04 end 18:29
 */