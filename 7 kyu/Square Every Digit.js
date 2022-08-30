function squareDigits(num){
    let numArr = String(num).split('');
    numArr2 = numArr.map((num) => num * num);
    result = numArr2.join('');
    return parseInt(result);
  }