function solution(s){
    let answer = null;
    let isClosed = null;
    let bracket = 0
    
    for(let i = 0; i < s.length; i++){
        isClosed = bracket === 0 ? true : false;
        
        if(s[i] === ")"){
            if(isClosed === true) {
                answer = false;
                break;
            } else {
                bracket--
            }
        } else {
            bracket++
        }
    }
    
    isClosed = bracket === 0 ? true : false;
    
    if(answer === false){
        return answer;    
    } else {
        return isClosed;
    }

}