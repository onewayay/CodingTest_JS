function solution(order) {
    let clap = 0;
    const strOrder = String(order);
    
    for(let i = 0; i < strOrder.length; i++){
        if(strOrder[i] === '3' || strOrder[i] === '6' || strOrder[i] === '9'){
            clap++;
        }
    }
    
    return clap;
}