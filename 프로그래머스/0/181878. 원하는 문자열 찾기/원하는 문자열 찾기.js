function solution(myString, pat) {   
    let isInclude = myString.toLowerCase().includes(pat.toLowerCase());
    
    let answer = isInclude ? 1 : 0;
    
    return answer;
}