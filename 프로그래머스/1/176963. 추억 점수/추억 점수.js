function solution(name, yearning, photo) {
    let answer = [];
    const score = {}
    
    name.forEach((n, i) => score[n] = yearning[i]);
        

    for(let i = 0; i < photo.length; i++){
        let sum = 0;
        for(let j = 0; j < photo[i].length; j++){
            sum += score[photo[i][j]] || 0;
        }
        answer.push(sum);
    }
    return answer;                
}