function solution(nums) {
    let plusArr = [];
    
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            for(let k = j + 1; k < nums.length; k++){
                const num = nums[i] + nums[j] + nums[k];
                plusArr.push(num);
            }
        }
    }
    
    // 소수 판별
    function isPrime(n) {
      if (n < 2) return false; // 0, 1은 소수가 아님
      for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false; // 나누어떨어지면 소수 아님
      }
      return true;
    }
    
    const answer = plusArr.filter((num)=>{
        return isPrime(num);
    })
    
    return answer.length;
}