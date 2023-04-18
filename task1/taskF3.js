const fruits = ["apple", "cherry", "orange", "banana", "mango", "strawbery"];

document.write(fruits.sort((a, b) => a.localeCompare(b)));

function searchFruit(value) {
  const upperValue = value.toUpperCase();
  return fruits.findIndex((item) => item.toUpperCase() === upperValue);
}

console.log(searchFruit("BaNaNa"));
console.log(searchFruit("potato"));
console.log(searchFruit("mango"));
