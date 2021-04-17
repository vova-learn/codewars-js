// https://www.codewars.com/kata/54ff3102c1bad923760001f3

const getVowelsCount = (string) => {
    const vowels = [`a`, `e`, `i`, `o`, `u`];
    return vowels.reduce((acc, item) => {
        if (string.includes(item)) {
            for (const vowel of string.split(``)) {
                if (vowel === item) {
                    ++acc;
                }
            }
            return acc;
        } else {
            return acc;
        }
    }, 0);
};

console.log(getVowelsCount(`abracadabra`)); // 5
// You have passed all of the tests! :)
// start 23:05 end 23:18