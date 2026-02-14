function solution(common) {
    let answer = 0;
    
    let cal = 0;
    if((common[1] - common[0]) === (common[2] - common[1])){
       cal = common[1] - common[0];
       answer = common[common.length - 1] + cal;
    } else {
        cal = common[1] / common[0];
       answer = common[common.length - 1] * cal;
    }
    return answer;
}