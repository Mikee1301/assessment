const printNumberTreeBy = (maxNumber) => {
  for (let i = 1; i <= maxNumber; i++) {
    let number = '';
    for (let j = 0; j < i; j++) {
        number += i;
    }
    console.log(number);
  }
}

printNumberTreeBy(6);