function solution(s){
    let stack = [];
    for(let i = 0; i < s.length; i++){
        const str = s[i]; // 현재 글자
        if(stack.length > 0 && str === stack[stack.length - 1]){ 
            // stack이 비어있지 않거나 현재 글자가 스택의 마지막 글자와 같을 때
            stack.pop(); // stack의 마지막 글자 비우기
        }else{ //  stack이 비었거나 현재 글자와 stack의 마지막 글자가 같지 않을 때
            stack.push(str); // stack에 현재 글자 추가
        }
    }
    
    return stack.length === 0 ? 1 : 0;
}