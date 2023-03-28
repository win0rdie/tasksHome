const inputNumber = prompt('Введіть тризначне число');

const secondDigit = Math.floor((inputNumber / 10) % 10);
alert(secondDigit); // 0
