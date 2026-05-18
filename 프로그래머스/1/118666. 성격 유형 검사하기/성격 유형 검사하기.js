function solution(survey, choices) {
    // survey: 질문마다 판단하는 지표를 담은 1차원 문자열 배열
    // choices: 검사자가 각 질문마다 선택한 선택지를 담은 1차원 정수 배열
    let answer = '';
    
    let kakaoType = {
        R: 0,
        T: 0,
        C: 0,
        F: 0,
        J: 0,
        M: 0,
        A: 0,
        N: 0,
    }
    
    survey.forEach((type, i)=>{
        if(choices[i] < 4){ // choices[i]가 4보다 작으면 첫번째 알파벳에 4 - choices[i] 만큼 점수 추가
            kakaoType[type[0]] += 4 - choices[i];
        } else if(choices[i] > 4){ // choices[i]가 4보다 크면 두번째 알파벳에 choices[i] - 4 만큼 점수 추가
            kakaoType[type[1]] += choices[i] - 4;         
        }
    });
    
    // 점수 비교해서 answer에 유형 추가
    answer += kakaoType['R'] >= kakaoType['T'] ? 'R' : 'T';
    answer += kakaoType['C'] >= kakaoType['F'] ? 'C' : 'F';
    answer += kakaoType['J'] >= kakaoType['M'] ? 'J' : 'M';
    answer += kakaoType['A'] >= kakaoType['N'] ? 'A' : 'N';
    
    return answer;
}