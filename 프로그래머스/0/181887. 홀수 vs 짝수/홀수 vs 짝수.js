function solution(num_list) {
    var answer = 0;
    
    let odd = 0;
    let even = 0;
    
    num_list.forEach((num, idx)=>{
        if((idx + 1) % 2 === 1){ // 짝
            even += num;
        } else {
            odd += num;
        }
    })
    
    answer = odd >= even ? odd : even; 
    
    return answer;
}