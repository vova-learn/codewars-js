// https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/javascript

const getEvenOrOdd = number => {
    const Numbers = {
        ODD: `Odd`,
        EVEN: `Even`,
    };

    return !(number % 2) ? Numbers.EVEN : Numbers.ODD;
};

// const getEvenOrOdd = number => !(number % 2) ? `Even` : `Odd`;

getEvenOrOdd(8); // Even
//You have passed all of the tests! :)