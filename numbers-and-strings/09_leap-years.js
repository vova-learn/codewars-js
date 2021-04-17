// https://www.codewars.com/kata/526c7363236867513f0005ca

const getLeapYear = (year) => {
    if (!(year % 400)) {
        return true;
    }

    if (!(year % 4)) {
        if (!(year % 100)) {
            return false;
        }

        return true;
    }

    return false;
};

console.log(getLeapYear(1234)); // false
// You have passed all of the tests! :)
// start 16:30 end 17:00