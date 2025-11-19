function solution(a, b, c, d) {
    let answer = 0;
    if(a === b && b === c && c === d){ // 모두 같은 경우
        answer = 1111 * a;
    } else if(a === b && b === c && a !== d){ // 3개가 같고 1개가 다른 경우
        answer = (10 * a + d) ** 2; 
    } else if(a === b && b === d && a !== c) {
        answer = (10 * a + c) ** 2; 
    } else if(a === c && c === d && a !== b){
        answer = (10 * a + b) ** 2; 
    } else if(b === c && c === d && a !== b){
        answer = (10 * b + a) ** 2; 
    } else if(a === b && c == d && a !== c){ // 2개씩 같은 경우  
        answer = (a + c) * Math.abs(a - c)
    } else if(a === c && b === d && a !==  b){
        answer = (a + b) * Math.abs(a - b)
    } else if(a === d && b === c && a !== b){
        answer = (a + b) * Math.abs(a - b)
    } else if(a === b && a !== c && a !== d && c !== d){ // 2개가 같고 나머지 두개는 각각 다른 경우
        answer = c * d;
    } else if(a === c && a !== b && a !== d && b !== d){
        answer = b * d;
    } else if(a === d && a !== b && a !== c && b !== c){
        answer = b * c; 
    } else if(b === c && b !== a && b !== d && a !== d){
        answer = a * d;
    } else if(b === d && b !== c && b !== a && a !== c){
        answer = a * c;
    } else if(c === d && c !== a && c !== b && a !== b){
        answer = a * b; 
    } else { // 모두 다른 경우
        answer = Math.min(a, b, c, d);
    }
    return answer;
}