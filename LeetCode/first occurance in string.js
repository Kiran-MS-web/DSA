//logic of indexOf() operator
var strStr = function(haystack, needle) {
   let a = haystack.length;
   let b = needle.length;
   for (let i=0; i<=a-b; i++){                          // haystack.indexOf(needle)
    if (haystack.substring(i, i+b) === needle){ 
        return i;
    }
   }
   return -1;
};
var haystack = "a";
var needle = "a";
let obj = strStr(haystack, needle);
console.log(obj);