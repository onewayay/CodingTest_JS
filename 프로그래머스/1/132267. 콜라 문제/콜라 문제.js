function solution(a, b, n) {
    // a개 가져가면 b병 줌, n개 가지고 있으면 총 몇개?
    
    let total = 0; // 총 누적 콜라
    let currentCoke = n; // 현재 가진 콜라

    while(currentCoke >= a){
        let returnCoke = Math.floor(currentCoke / a) * b;
        let restCoke = currentCoke % a;
        total += returnCoke;
        currentCoke = returnCoke + restCoke;
        
    }
    
    return total;
}