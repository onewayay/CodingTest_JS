function solution(n) {
    let nList = String(n).split(''); 
    let answer = 0;
    
    for(let i = 0; i < nList.length; i++){
        answer += Number(nList[i]);
    }
    return answer;
}