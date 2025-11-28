function solution(num_list, n) {
    var answer = [];
    
    num_list.forEach((num, idx)=>{
        if(idx % n === 0){
            answer.push(num);
        }
    })
    
    return answer;
}