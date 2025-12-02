function solution(myString) {
    let answer = [];
    
    const splitStr = myString.split('x');
    
    splitStr.forEach((str)=>{
        answer.push(str.length);
    })
    
    return answer;
}