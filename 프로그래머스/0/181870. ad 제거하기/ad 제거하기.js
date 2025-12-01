function solution(strArr) {
    let answer = [];
    
    strArr.forEach((str, idx)=>{
        if(str.includes('ad') === false){
            answer.push(str);
        }
    })
    
    return answer;
}