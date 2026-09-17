function solution(n) {
    let total = 0;
    
    let startNum = 1;
    while(startNum <= n){
        let sum = 0;
        for(let i = startNum; i <= n; i++){
            sum += i;
            if(sum >= n) break;
        }
        
        if(sum === n) total++
        startNum++
    }
    return total
}