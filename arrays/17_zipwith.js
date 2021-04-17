// https://www.codewars.com/kata/zipwith

const getZipWith = (fn, arrayA, arrayB) => {
    // const array = [];
    // const mainArray = arrayA.length <= arrayB.length ? arrayA : arrayB;
    
    // for (const key in mainArray) {
    //     array.push(fn(arrayA[key], arrayB[key]));
    // }

    // return array;

    const mainArray = arrayA.length <= arrayB.length ? arrayA : arrayB;
    return mainArray.map((item, index) => fn(arrayA[index], arrayB[index]));
}

const plus = (a,b) => a+b ;
console.log(getZipWith(plus, [0,1,2,3,4,5], [6,5,4,3,2,1])); // [6,6,6,6,6,6]
console.log(getZipWith(plus, [0,1,2,3,4  ], [6,5,4,3,2,1])); // [6,6,6,6,6,6]
console.log(getZipWith(plus, [0,1,2,3,4,5], [6,5,4,3,2  ])); // [6,6,6,6,6,6]
/**
 * You have passed all of the tests! :)
 * 
 * start 18:40 end 18:47
 */