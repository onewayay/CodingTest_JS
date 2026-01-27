function solution(k, score) {
    let answer = [];
    let honor = [];
    
    score.forEach((num, idx) => {
        honor.push(num);
        honor.sort((a, b) => a - b);
        if (idx > k - 1) {
            honor.splice(0, 1);
        } 
        
        answer.push(honor[0]);   
    });
    
    return answer;
}