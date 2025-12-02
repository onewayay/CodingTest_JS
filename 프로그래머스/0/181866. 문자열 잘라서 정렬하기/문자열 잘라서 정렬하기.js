function solution(myString) {
    const splitStr = myString.split('x');
    
    const answer = splitStr.filter((str)=>{
        return str !== ''
    }).sort();
    
    return answer;
}