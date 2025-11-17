function solution(n) {
    let sum = 0;
    if(n % 2 == 1){
        for (let i = n; i > 0; i -= 2){
            sum = sum + i;
        }
    }  else{
        for (let i = n; i > 0; i -= 2){
            sum = sum + i**2;
        }
    }
    return sum;
}