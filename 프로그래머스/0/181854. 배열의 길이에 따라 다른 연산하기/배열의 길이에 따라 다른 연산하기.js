function solution(arr, n) {
    const answer = arr.map((num,idx,arr)=>{
        if(arr.length % 2 !== 0){
            if(idx % 2 ===0){
                return num + n;
            } else {
                return num;          
            }
        } else {
            if(idx % 2 !==0){
                return num + n;
            } else{
                return num;
            }
        }
    })
    return answer;
}