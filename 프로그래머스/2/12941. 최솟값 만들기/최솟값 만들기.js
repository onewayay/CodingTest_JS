function solution(A,B){
    // 한쪽은 오름차순, 한쪽은 내림차순으로 정렬후 곱하면 된다.
    A.sort((a, b) => a - b);
    B.sort((a, b) => b - a);
    
    let lowSum = 0;
    for(let i = 0; i < A.length; i++){
        lowSum += A[i] * B[i];
    }
    
    return lowSum;
}