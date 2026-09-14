function solution(n) {
    let num = n;
    let arr = [];
    while(num > 0){
        num -= 1;
        if(num % 3 === 0){
            arr.unshift(1);
        }else if(num % 3 === 1){
            arr.unshift(2);
        }else{
            arr.unshift(4);
        }
        num = Math.floor(num / 3);

    }
    return arr.join("");
}