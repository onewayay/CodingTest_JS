function solution(l, r) {
    let result = [];
    for(let i = l; i <= r; i++){
        let arr = String(i).split('');
        let bool = arr.every(item => item === '5' || item === '0');
        if(bool){
            result.push(i);
        }
    }
    return result.length ? result : [-1];
}