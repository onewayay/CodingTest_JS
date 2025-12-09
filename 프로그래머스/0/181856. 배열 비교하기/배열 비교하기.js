function solution(arr1, arr2) {
    let answer = 0;
    
    length1 = arr1.length;
    length2 = arr2.length;
    
    if(length1 > length2) {
        answer = 1;
    } else if (length2 > length1) {
        answer = -1;
    } else {
        let sum1 = 0;
        let sum2 = 0;
        for(let i = 0; i < length1; i++){
            sum1 += arr1[i];
            sum2 += arr2[i];
        }
        if(sum1 > sum2){
            answer = 1;
        } else if (sum2 > sum1){
            answer = -1;
        }
    }
    
    return answer;
}