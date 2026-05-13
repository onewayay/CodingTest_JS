function solution(s) {
    let answer = '';

    // 영단어 - 숫자 
    const numbers = {
        zero: 0,
        one : 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9,
    }; 
    let curStr = '';
    
    for(let i = 0; i < s.length; i++){
        if(!isNaN(s[i])){ // 숫자이면
            answer += s[i];
        } else {
            curStr += s[i];
            
            if(curStr in numbers){
                answer += numbers[curStr];
                curStr = '';
            }
        }
    }
    
    return Number(answer);
}