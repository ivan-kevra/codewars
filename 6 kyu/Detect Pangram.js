function isPangram(string){
    strArr = string.toLowerCase();
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    for (let i = 0; i < alphabet.length; i++) {
        if (strArr.indexOf(alphabet[i]) < 0) {
            return false;
        }
    }
    return true;
}