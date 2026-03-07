function solution(my_string) {
    const arr = my_string.split(" ");
    let answer = Number(arr[0]);
    
    for(let i = 1; i < arr.length; i += 2){
        if(arr[i] === '+'){
            answer += Number(arr[i+1]);
        } else {
            answer -= Number(arr[i+1]);
        }
    }
    
    return answer;
}