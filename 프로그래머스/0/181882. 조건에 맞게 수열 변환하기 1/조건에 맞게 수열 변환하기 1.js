function solution(arr) {
    arr.forEach((num, idx)=>{
        if(num >= 50 && num % 2 === 0){
            arr[idx] /= 2;
        } else if(num < 50 && num % 2 !== 0){
            arr[idx] *= 2;
        }
    })
    return arr;
}