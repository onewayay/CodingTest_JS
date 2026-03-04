function solution(A, B) {
    let answer = false;
    let count = 0;
    const arrayA = A.split('');
    
    for(let i = 0; i < arrayA.length; i++){
        if(arrayA.join('') === B){
            answer = true;
            break;
        }
        
        let lastA = arrayA[arrayA.length - 1];
        arrayA.pop();
        arrayA.unshift(lastA);
        count++
    }
    
    return answer ? count : -1;
}