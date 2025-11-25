function solution(arr, query) {
    let answer = [...arr]
    query.forEach((num, idx)=>{
        if(idx % 2 === 0){
            answer.splice(num + 1);
        } else{
            answer.splice(0, num);
        }
    })
    
    return answer;
}