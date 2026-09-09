function solution(n) {
    const isTrue = Number.isInteger(Math.sqrt(n));
    
    return isTrue ? (Math.sqrt(n) + 1) ** 2 : -1;
}