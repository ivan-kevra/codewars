function fakeBin(x){
    let digit = '';
    for (let i = 0; i < x.length; i++) {
        if (x[i] < '5') {
            digit += '0';
        } else {
            digit += '1';
        }
    }
    console.log(digit);
}
fakeBin(2412428878);