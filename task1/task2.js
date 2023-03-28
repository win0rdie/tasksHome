
let fetchNumber = prompt('Введіть тризначне число');

const palindromNumber = function(fetchNumber) {
    if(fetchNumber < 0) return false;
    if(fetchNumber % 10 === 0) return false;

    let reverseNum = 0;

    while(fetchNumber > reverseNum) {
        reverseNum *=10;
        reverseNum += fetchNumber % 10;
        fetchNumber = Math.trunc(fetchNumber / 10)
    }
    return  fetchNumber === Math.trunc( reverseNum / 10)
}
if(palindromNumber(fetchNumber)) {
    alert(`Число є паліндромом: ${(fetchNumber)}`);
} else {
    alert("Введене число не є поліндромом")
}


