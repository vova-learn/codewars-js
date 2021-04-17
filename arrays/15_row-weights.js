// https://www.codewars.com/kata/row-weights

const getWeightTeams = (arr) => {
    return arr.reduce((acc, item, index) => {
        acc[index % 2] = acc[index % 2] + item ;
        return acc;
    }, [0,0]);
}

console.log(getWeightTeams([50,60,70,80])); // [120,140]
console.log(getWeightTeams([50])); // [50, 0]
console.log(getWeightTeams([50,129, 242, 10])); // [292, 139]

/**
 * You have passed all of the tests! :)
 * 
 * start 01:48 end 02:18
 */