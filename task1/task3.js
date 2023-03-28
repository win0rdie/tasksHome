
const inputNum = prompt("Введіть ціле число");

const evenNum = inputNum => inputNum % 2 === 0 && "Парне";
const oddNum = inputNum => inputNum % 2 !== 0 && "Непарне";

alert(evenNum(inputNum) || oddNum(inputNum));
