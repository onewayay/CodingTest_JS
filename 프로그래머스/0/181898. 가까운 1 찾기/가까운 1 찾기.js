function solution(arr, idx) {
    let answer = 0;
    let cutArr = arr.slice(idx);
    
    cutIdx = cutArr.findIndex((num)=>{
        return num === 1;
    });
    
    answer = cutIdx === -1 ? cutIdx : cutIdx + idx;
    
    return answer;
}