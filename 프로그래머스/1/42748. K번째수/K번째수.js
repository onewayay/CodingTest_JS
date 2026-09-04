function solution(array, commands) {
    let answer = [];
    
    commands.forEach((arr)=>{
        let [i, j, k] = arr;
        
        const slicedArr = array.slice(i - 1, j).sort((a,b) => a - b);
        
        answer.push(slicedArr[k-1])
    });
    
    return answer;
}