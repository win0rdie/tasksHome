const inputSummary = prompt('Введіть суму продаж за місяць');

const sallary = 250;
const percent = 10;

const bonus = Number(sallary) + Number(inputSummary/100 * percent)
alert(bonus)
