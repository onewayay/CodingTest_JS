function solution(a, b) {
    let result1 = String(a) + String(b);
    let result2 = String(b) + String(a);
    
    if (result1 >+ result2){
        return Number(result1);
    }else {
        return Number(result2);
    }
}