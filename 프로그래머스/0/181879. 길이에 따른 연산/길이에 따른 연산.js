function solution(num_list) {
    let answer = num_list.length >= 11 ? 0 : 1;
    
    for(let num of num_list){
        if(num_list.length >= 11){
            answer += num;
        } else {
            answer *= num;
        }
    }
    
    return answer;
}