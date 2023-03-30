const num = prompt("Введіть п'ятизначне число");
const isPalindrome = num === num.split("").reverse().join("");

if (isNaN(num) || num <= 0 || num.length !== 5) {
  alert("Будь ласка, введіть числові значення.");
} else if (isPalindrome) {
  alert(`${num} - це паліндром`);
} else {
  alert(`${num} число не являється паліндромом`);
}
