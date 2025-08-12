var plusOne = function(digits) {
   let res = BigInt(digits.join('')) + 1n;
    return Array.from(String(res), Number);
};
console.log(plusOne([1, 2, 3])); // Output: [1, 2, 4]