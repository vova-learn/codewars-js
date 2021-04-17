const getRandomArray = () => {
    const ARRAY_LENGTH = 100;
    let array = [];

    for (let i = 0; i < ARRAY_LENGTH; i++) {
        const rec = () => {
            const randomNumber = Math.ceil(Math.random() * ARRAY_LENGTH);
            const isNumberIncludes = array.includes(randomNumber);
            !isNumberIncludes ? array.push(randomNumber) : rec();
        };
        rec();
    }
    return array;
};

console.log(getRandomArray());
console.log(getRandomArray().sort((a, b) => a - b));
console.log(getRandomArray().length);