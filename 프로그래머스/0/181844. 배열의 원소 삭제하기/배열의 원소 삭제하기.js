function solution(arr, delete_list) {
    let answer = []

    for(num of arr){
        if(!delete_list.includes(num)){
            answer.push(num);
        }
    }
    
    return answer;
}