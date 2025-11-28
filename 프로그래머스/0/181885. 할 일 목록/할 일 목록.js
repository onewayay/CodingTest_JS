function solution(todo_list, finished) {
    let answer = [];
    
    todo_list.forEach((todo, idx)=>{
        if(finished[idx] === false){
            answer.push(todo);
        }
    })
    
    return answer;
}