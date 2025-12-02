function solution(my_string) {
    let answer = [];
    
    const splitStr = my_string.split(' ');
    
    splitStr.forEach((str)=>{
        if(str !== ''){
            answer.push(str);
        }
    })
    
    return answer;
}