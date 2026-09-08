function solution(x) {
    const strX = String(x);
    
    let sumX = 0;
    for(let i = 0; i < strX.length; i++){
        sumX += Number(strX[i]);
    }
    
    return x % sumX === 0 ? true : false;
}