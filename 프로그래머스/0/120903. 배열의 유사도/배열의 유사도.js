function solution(s1, s2) {
    let count = 0;
    
    for(let str of s1){
        if(s2.includes(str)){
            count++;
        }
    }
    
    return count;
}