function solution(arr, flag) {
    let answer = [];
    
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i]; j++){
            if(flag[i] === true){
                answer = [...answer, arr[i], arr[i]];
            } else {
                answer.splice(-1);
            }
        }
    }
    
    return answer;
}