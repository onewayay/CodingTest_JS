function solution(d, budget) {
    let total = 0;
    
    const sortD = d.sort((a,b)=> a - b);
    
    let index = 0;
    while(budget >= sortD[index]){
        budget -= sortD[index];
        total++;
        index++;
    }
    
    return total;
}