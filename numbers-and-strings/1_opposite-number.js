// https://www.codewars.com/kata/opposite-number

const getOpposite = (number) => {
    const isPositive = number > 0 && number !== 0;

    if (isPositive) {
        return -number;
    } else if (!isPositive) {
        return (number * -1);
    } else {
        return 0;
    }
};

console.log(getOpposite(-20200)); // 20200
//You have passed all of the tests! :)