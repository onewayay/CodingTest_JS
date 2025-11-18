function solution(arr, queries) {
    for(let idx =0; idx < queries.length; idx++){
        let i = queries[idx][0];
        let j = queries[idx][1];
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}