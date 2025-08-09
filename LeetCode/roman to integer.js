/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
   let romanMap ={
        I   :  1,
        V  : 5,
        X   :   10,
        L   : 50,
        C    : 100,
        D    : 500,
        M :  1000
   } ;
   let total = 0;
   let i=0;
   while (i<s.length){
    let cv = romanMap[s[i]];
    let nv = romanMap[s[i+1]];
    if(nv>cv){
        total += (nv-cv);
        i += 2;
    }else{
        total += cv;
        i += 1;
    }
    
   }
  return total;
};
console.log(romanToInt("III")); // Output: 3
