const arr1 = [1, 11, 2, 22, 3, 33, 4, 44, 5, 55];
const arr2 = [11, 22, 33, 44, 55];

const arr = arr1.filter((value) => !arr2.includes(value));
alert(arr);
