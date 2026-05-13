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
    
    let curStr = ''; // 현재 문자열
    
    for(let i = 0; i < s.length; i++){
        if(!isNaN(s[i])){ // 숫자이면
            answer += s[i];
        } else { // 숫자가 아니면
            curStr += s[i];
            
            if(curStr in numbers){ // 현재 문자열이 numbers 프로퍼티 이름과 같으면
                answer += numbers[curStr]; // 해당 프로퍼티 값을 answer에 추가
                curStr = ''; // 현재 문자열 초기화
            }
        }
    }
    
    return Number(answer);
}