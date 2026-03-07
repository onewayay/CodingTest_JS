function solution(array) {
    let bigNum = 0;
    let bigIdx = 0;
    
    array.forEach((num, idx)=>{
        if(num > bigNum){
            bigNum = num;
            bigIdx = idx;
        }
    })
    
    return [bigNum, bigIdx];
}