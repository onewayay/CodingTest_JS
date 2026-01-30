function solution(a, b) {
    let score;
    if((a % 2 === 1) && (b % 2 === 1)){
        score = (a ** 2) + (b ** 2);
    } else if((a % 2 === 0) && (b % 2 === 0)){
        score = Math.abs(a - b);
    } else{
        score = 2 * (a + b);
    }
    
    return score;
}