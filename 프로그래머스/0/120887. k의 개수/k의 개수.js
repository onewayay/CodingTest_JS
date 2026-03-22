function solution(i, j, k) {
    let count = 0;
    
    for (let idx = i; idx <= j; idx++) {
        const str = String(idx);
        
        for (let char of str) {
            if (char === String(k)) {
                count++;
            }
        }
    }
    
    return count;
}