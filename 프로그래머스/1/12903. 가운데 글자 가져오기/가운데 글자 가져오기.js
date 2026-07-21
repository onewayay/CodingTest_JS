function solution(s) {
    let  word = ""
    
    if(s.length % 2 === 1){
        console.log(s[(s.length - 1) / 2])
        word += s[(s.length - 1) / 2];
    } else{
        word += s[s.length/2 - 1];
        word += s[s.length/2]
    }
    
    return word;
}