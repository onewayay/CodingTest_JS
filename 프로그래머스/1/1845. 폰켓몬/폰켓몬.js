function solution(nums) {
    let count = 0;
    let arr = [];
    const canGet = nums.length / 2;
    for(let i = 0;  i < nums.length; i++){
        if(!arr.includes(nums[i])) arr.push(nums[i]);
    }
    
    return arr.length < canGet ?  arr.length : canGet;
}