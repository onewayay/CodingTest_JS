function solution(arr) {
    let answer = [];
    
    let firstTwo = arr.indexOf(2);
    let lastTwo = arr.lastIndexOf(2);
    
    if(firstTwo !== -1){
       answer = arr.slice(firstTwo, lastTwo + 1);
    } else {
        answer.push(firstTwo);
    }
    
    return answer;
}