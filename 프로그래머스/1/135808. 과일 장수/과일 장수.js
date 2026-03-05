function solution(k, m, score) {
    let profit = 0;
    let sortScore = score.sort((a, b) => a - b);
    
    for (let i = score.length; i >= m; i -= m) {
        const box = sortScore.slice(i - m, i);
        
        profit += box[0] * m;
    }
    
    return profit;
}