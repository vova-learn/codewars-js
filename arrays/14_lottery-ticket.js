// https://www.codewars.com/kata/lottery-ticket

const getLotteryResult = (arr, total) => {
    const Result = {
        WIN: `Winner!`,
        LOSE: `Loser!`
    };

    const counter = arr.reduce((acc, items) => {
        let isWinner = false;
        for (const item of items[0]) {
            isWinner = item.charCodeAt() === items[1] ? true : false;
            
            if (isWinner) {
                break;
            }
        }

        if (isWinner) {
            return ++acc;
        } else {
            return acc;
        }
    }, 0);

    return  counter >= total ? Result.WIN : Result.LOSE;
};

// .charCodeAt()

// console.log(getLotteryResult([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 2)); // loser
// console.log(getLotteryResult([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 1)); // winner
// console.log(getLotteryResult([['HGTYRE', 74], ['BE', 66], ['JKTY', 74]], 3)); //loser
console.log(getLotteryResult([[ 'XTRQM', 84 ], [ 'EERB', 79 ],[ 'NRGE', 82 ], [ 'CVEYDCD', 89 ]], 2)); // winner

/**
 * You have passed all of the tests! :)
 * 
 * start 01:23 end 01:42
 */