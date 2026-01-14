function solution(cards1, cards2, goal) {
    let result = "NO";
    for(let word of goal){
        if(word === cards1[0]){
            result = 'Yes';
            cards1.shift();
        } else if(word === cards2[0]){
            result = 'Yes';
            cards2.shift();
        } else {
            result = 'No';
            break;            
        }
    }
    
    return result;
}