function solution(n, arr1, arr2) {
    // 각 칸은 공백 또는 벽. 공백은 0 벽은 1
    // 1번 지도 + 2번 지도 = 전체지도
    // 어느 한 지도에서라도 벽인 부분은 전체 지도에서도 벽임
    // 1번에서도 공백 2번에서도 공백 이여야 전체 지도에서도 공백
    // n : 정사각형 지도의 한 변의 길이
    // arr1 : 1번 지도 2진수로 담은 배열
    // arr2 : 2번 지도 2진수로 담은 배열
    
    // 값이 ''인 n개의 요소로 채워진 배열 생성 
    let answer = Array.from({ length: n }, () => '');
    
    // 2진수로 바꾼 배열
    const newArr1 = arr1.map((num)=>{
        let numLength = num.toString(2);
        let changeNum = num.toString(2);
        
        for(let i = 0; i < n - numLength.length; i++){
            changeNum = '0' + changeNum;
        }
        
        return changeNum;
    });
    const newArr2 = arr2.map((num)=>{
        let numLength = num.toString(2);
        let changeNum = num.toString(2);
        
        for(let i = 0; i < n - numLength.length; i++){
            changeNum = '0' + changeNum;
        }
        
        return changeNum;
    });
    
    for(let i = 0; i < newArr1.length; i++){
        for(let j = 0; j < n; j++){
            if(newArr1[i][j] === '0' && newArr2[i][j] === "0") {
                answer[i] += ' ';
            } else {
                answer[i] += '#';
            }
        }
    }
    
   return answer;
}