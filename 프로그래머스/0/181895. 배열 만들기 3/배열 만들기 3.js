function solution(arr, intervals) {   
    let firstArr = arr.slice(intervals[0][0], intervals[0][1] + 1);
    let secondArr = arr.slice(intervals[1][0], intervals[1][1] + 1);
    
    let answer = [...firstArr, ...secondArr];
    
    return answer;
}