function solution(my_string) {
    const alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    
    let answer = [];
    
    alphabets.forEach((alphabet)=>{
        let count = 0;
        for(let i = 0; i < my_string.length; i++){
            if(alphabet.toUpperCase() === my_string[i]) count++;
        }
        answer.push(count);
    })
    
    alphabets.forEach((alphabet)=>{
        let count = 0;
        for(let i = 0; i < my_string.length; i++){
            if(alphabet === my_string[i]) count++;
        }
        answer.push(count);
    })
    
    
    return answer;
}