function solution(t, p) {
    let count = 0;
    let pLength = p.length;
    
    for(let i = 0; i <= t.length - pLength; i++){
        const sliceNum = t.slice(i, i + pLength);
        
        if(Number(sliceNum) <= Number(p)){
            count++;
        }
    }
    
    
    return count;
}