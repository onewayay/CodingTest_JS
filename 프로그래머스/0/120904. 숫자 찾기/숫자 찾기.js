function solution(num, k) {
    const strNum = String(num);
    
    return strNum.includes(k) ? strNum.indexOf(k) + 1 : -1
}