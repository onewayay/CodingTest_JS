function solution(arr, k) {
    const answer = [];
    
    if(k %  2 === 1){
        for(let num of arr){
            answer.push(num * k);
        }
    } else{
        for(let num of arr){
             answer.push(num + k);           
        } 
    }
    
    return answer;
}