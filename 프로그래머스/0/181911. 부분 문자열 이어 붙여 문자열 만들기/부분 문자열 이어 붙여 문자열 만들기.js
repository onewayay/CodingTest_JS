function solution(my_strings, parts) {
    let answer = '';
    
    parts.forEach(([s, e], idx)=>{
        answer += my_strings[idx].slice(s, e+1);
    })
    
    return answer;
}