var removeDuplicates = function(nums) {
  if(nums.length === 0) return 0;
    let i = 0;
    for (let j= 1; j<nums.length; j++){
        if(nums[j] !== nums[i]){
            i++;
            nums[i] = nums[j];
            nums[j] = "_";
        }
    }
    return i+1 , nums;  
};
console.log(removeDuplicates([1,1,2])); // Output: 2