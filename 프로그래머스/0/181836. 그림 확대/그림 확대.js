function solution(picture, k) {
    let answer = [];
    
    for(let pic of picture){
        let width = '';
        
        for(let i = 0; i < pic.length; i++){
           width += pic[i].repeat(k);
        }
        
        for (let i = 0; i < k; i++) {
            answer.push(width);
        }
    }
    
    return answer;
}