function solution(array, n) {
    let nearNumIdx = 0;
    for(let i = 1; i < array.length; i++){
        if(Math.abs(array[nearNumIdx] - n) > Math.abs(array[i] - n)){
            nearNumIdx = i;
        } else if(Math.abs(array[nearNumIdx] - n) === Math.abs(array[i] - n) && (array[nearNumIdx] - n) > (array[i] - n)){
            nearNumIdx = i;
        } 
        
    }
    
    return array[nearNumIdx];
}