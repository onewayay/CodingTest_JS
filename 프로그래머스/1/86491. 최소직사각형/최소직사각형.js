function solution(sizes) {
    let w = 0;
    let h = 0;
    
    sizes.forEach((card)=>{
        card.sort((a,b)=> a - b);
        
        if(card[0] > w) {
            w = card[0]
        }
        
        if(card[1] > h) {
            h = card[1]
        }
    });
    
    return w * h;
}