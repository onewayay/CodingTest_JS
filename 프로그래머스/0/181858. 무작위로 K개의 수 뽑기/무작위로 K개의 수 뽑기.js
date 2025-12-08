function solution(arr, k) {
    let answer = [];
    
    arr.forEach((num)=>{
        if(answer.length < k && !answer.includes(num)){
            answer.push(num);
        }
    })
    
    while(answer.length < k){
      answer.push(-1);
    }
    
    return answer;
}