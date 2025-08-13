
let reverse = function(x) {
    let rev = 0;
    let rem = 0;
    const isNegative = x < 0;
    x = Math.abs(x);
    
    while (x > 0) {
        rem = x % 10;
        rev = rev * 10 + rem;
        x = Math.floor(x / 10);
    }
    
    if (isNegative) {
        rev = -rev;
    }
    
    // Check for overflow
    if (rev < -(2 ** 31) || rev > (2 ** 31) - 1) {
        return 0;
    }
    
    return rev;
}
console.log(reverse(-120)); 