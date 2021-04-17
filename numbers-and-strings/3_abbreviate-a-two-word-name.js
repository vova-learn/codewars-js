// https://www.codewars.com/kata/abbreviate-a-two-word-name

const getAbbrevName = name => (
    name.split(` `)
        .map((item) => item[0])
        .join(`.`).toUpperCase()
    );

console.log(getAbbrevName(`Виктор Цой`)); // В.Ц
// You have passed all of the tests! :)