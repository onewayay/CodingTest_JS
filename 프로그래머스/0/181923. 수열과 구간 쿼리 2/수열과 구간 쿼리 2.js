function solution(arr, queries) {
    let result = [];

    for(let i = 0; i < queries.length; i++){
        let [s, e, k] = queries[i];
        let candidate = [];
        
        for(let j = s; j <= e; j++){
            if(arr[j] > k){
                candidate.push(arr[j]);
            }
        }
        result.push(candidate.length ? Math.min(...candidate) : -1);
    }
    return result; 
}