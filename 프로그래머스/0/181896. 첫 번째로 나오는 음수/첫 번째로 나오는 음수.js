function solution(num_list) {
    let answer = 0;
    
    answer = num_list.findIndex((num)=>{
        return num < 0;
    })
    
    return answer;
}