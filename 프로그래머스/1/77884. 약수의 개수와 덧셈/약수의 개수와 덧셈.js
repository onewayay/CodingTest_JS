function solution(left, right) {
    let divisors = [];
    let answer = 0;
    
    for(let i = left; i <= right; i++){
        let arr = []
        for(let j = 1; j <= i; j++){
            if(i % j ===0){
                arr.push(j)
            }         
        }
        divisors.push(arr);   
    }
    
    for(let i = 0; i < divisors.length; i++){
        if(divisors[i].length % 2 === 0){
            answer += left + i;
        } else {
            answer -= left + i;
        }   
    }
    
    return answer;
}