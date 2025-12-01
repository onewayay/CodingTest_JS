function solution(myString, pat) {
    let answer = '';
    
    let idx = myString.lastIndexOf(pat);
    
    answer = myString.slice(0, idx + pat.length);
    
    return answer;
}