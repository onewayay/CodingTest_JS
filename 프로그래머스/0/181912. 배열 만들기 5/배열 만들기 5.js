function solution(intStrs, k, s, l) {
    let answer = [];
    intStrs.forEach((item)=>{
       let cutStr = Number(item.slice(s, s + l));
        if(cutStr > k){
            answer.push(cutStr);
        }
    })
    return answer;
}