const num = prompt("Введіть тризначне число");

const numArr = num.split("");

const duplicateNum = numArr.filter(
  (item, index) => numArr.indexOf(item) !== index
);

if (duplicateNum.length > 0) {
  alert("У числі є однакові цифри");
} else {
  alert("У числі немає однакових цифр");
}
