function findShort(s){
    s = s.split(' ').map(word => word.length);
    s.sort(function(a, b) {
        return a - b;
    });
    return s[0];
}
