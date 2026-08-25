function solution(a, b) {
    const answer = a.reduce((acc, cur, i)=>  acc += cur * b[i] , 0);
    
    return answer;
}