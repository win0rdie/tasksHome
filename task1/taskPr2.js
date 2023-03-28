const inputNumber = prompt("Введіть п'ятизначне число");

if (inputNumber.length !== 5 || isNaN(inputNumber)) {
  alert("Будь ласка, введіть п'ятизначне число");
} else {
  const lastNumber = inputNumber % 10;

  const newNum = parseInt(lastNumber + inputNumber.slice(0, -1));
  alert(newNum);
}
