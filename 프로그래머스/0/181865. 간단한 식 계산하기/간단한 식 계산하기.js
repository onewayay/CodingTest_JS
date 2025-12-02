function solution(binomial) {
    let answer = 0;
    
    const splitStr = binomial.split(' ');
    
    const [a, op, b] = splitStr;
    
    if(op === '+'){
       answer = Number(a) + Number(b);
    } else if(op === '-'){
       answer = Number(a) - Number(b);        
    } else {
       answer = Number(a) * Number(b);           
    }
 
    return answer;
}