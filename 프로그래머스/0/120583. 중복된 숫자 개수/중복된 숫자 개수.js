function solution(array, n) {
    let count = 0;
    
    for(let num of array){
        if(num === n) count++
    }
    
    return count;
}