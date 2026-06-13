function solution(dartResult) {
    // S: 1제곱, D: 2제곱, T: 3제곱
    // *: 해당 점수, 직전 점수 2배, 첫번째에서 나올시 해당 점수만 2배, *끼리 중첩된 부분은 4배, *와 #이 중첩될 경우 -2배
    // #: 해당 점수 마이너스
    
    const splitResult = dartResult.match(/\d+[A-Z][*#]?/g); // 숫자 기준으로 자르기
    
    let scores = [0, 0, 0]; // 3번의 점수 배열
    
    for(let i = 0; i < 3; i++){
        const curStr = splitResult[i];
        const num = curStr.split(/[a-zA-Z]/)[0];
        let score =  0;
        
        if(curStr.includes('S')){
            score = num;
        } else if(curStr.includes('D')){
            score = num ** 2;
        } else {
            score = num ** 3;
        }
        
        if(curStr.includes('*')){
            score *= 2;
            if(i !== 0){
                scores[i-1] *= 2;               
            }
        } else if(curStr.includes('#')){
            score *= -1; 
        }
        
        scores[i] = Number(score);

    }

    const finalScore = scores.reduce((acc, curr) => acc + curr, 0);
    return finalScore;
}