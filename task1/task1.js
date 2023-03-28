
let walletAmount = prompt("Скільки грошей у вашому гаманці?");
let chocolatePrice = prompt("Яка вартість однієї шоколадки?");

if (isNaN(walletAmount) || isNaN(chocolatePrice)) {
  alert("Будь ласка, введіть числові значення.");
} else {
  let chocolateCount = Math.floor(walletAmount / chocolatePrice);
  let changeAmount = walletAmount % chocolatePrice;

  alert("Ви можете купити " + chocolateCount + " шоколадок. Здача становить " + changeAmount.toFixed(2) + " грн.");
}
