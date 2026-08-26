function solution(a, b, n) {
    /*
        a: 콜라를 받기 위해 마트에 주어야 하는 병 수
        b: 빈 병 a개를 가져다 주면 마트가 주는 콜라 병 수 
        n: 상빈이가 가지고 있는 빈 병의 개수 
    */
    
    let myBottle = n; // 가지고 있는 콜라 숫자
    let totalBottle = 0; // 교환해서 받은 콜라 총 숫자
    
    
    while(myBottle >= a){
        let rest = myBottle % a; // a개씩 교환하고 남은 콜라
        let value = Math.floor(myBottle / a); // a개씩 몇번 교환 가능?
        let receive = value * b; // 교환해서 받은 콜라 (1교환에 b개씩 줌)
        
        totalBottle += receive;
        myBottle = rest + receive;
        
    }
    
    return totalBottle;
}