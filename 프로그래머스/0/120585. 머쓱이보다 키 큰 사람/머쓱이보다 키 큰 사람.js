function solution(array, height) {
    let count = 0;
    
    for(h of array){
        if(h > height) count++
    }
    
    return count;
}