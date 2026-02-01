function solution(order) {
    let ameCount = 0;
    let latteCount = 0;
    
    for(let menu of order){
        menu.includes('latte') ? latteCount++ : ameCount++;
    }
    
    return ameCount * 4500 + latteCount * 5000;
}