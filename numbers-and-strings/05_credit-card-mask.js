// https://www.codewars.com/kata/credit-card-mask

const getMaskCard = (card) => {
    const numbers = new Array;
    const Mask = {
        VISIBLE_COUNT: 4,
        SYMBOL: `#`,
    };

    if (card.length <= Mask.VISIBLE_COUNT) {
        return card;
    }

    const visible = card.split(``)
                        .splice(card.length - Mask.VISIBLE_COUNT, card.length)
                        .join(``);
    
    for (let i = 0; i < card.length - 4; i++) {
        numbers.push(Mask.SYMBOL);
    }

    return `${numbers.join(``)}${visible}`;
}

console.log(getMaskCard(`1111222233334444`)); // ############4444
console.log(getMaskCard(`123`)); // 123
console.log(getMaskCard(`12345`)); // #2345
// You have passed all of the tests! :)