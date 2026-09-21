function solution(n, w, num) {
    // n: 전체 상자 갯수
    // w: 한층에 놓을 수 있는 상자 갯수
    // num: 꺼내고 싶은 상자 번호
    
    let count = 0; // 꺼내는 갯수

    let numPos = 0; // 꺼낼 박스 위치
    let lastPos = 0; // 전체 박스 위치
    let totalFloor = Math.ceil(n / w); // 전체 박스 층
    let numFloor = Math.ceil(num / w); // 꺼낼 박스 층
    
    if(n <= w){ // 전체가 1층에서 끝나면?
        lastPos = w - 1;
        numPos = n -1
        totalFloor = 1;
        numFloor = 1;
    }
    
    if(Math.ceil(n / w) % 2 === 0){ // 전체가 짝수층이라면
        if(n % w === 0){
            lastPos = 0
        }else{
          lastPos = w - (n % w);          
        }
    } else { // 전체가 홀수층이라면
        if(n % w === 0){
            lastPos = w - 1;
        } else{
            lastPos = (n % w) - 1;
        }
    }
    
    if(Math.ceil(num / w) % 2 === 0){
        if(num % w === 0){
            numPos = 0;
        }else{
            numPos = w - (num % w);  
        }

    } else {
        if(num % w === 0){
            numPos = w - 1
        } else{
            numPos = (num % w) - 1
        }
    }
    
    count = totalFloor - numFloor;
    if(numPos >= lastPos) count += 1;
    
    return count;
}

function solution(n, w, num) {
    let numPos = 0, lastPos = 0;
    let totalFloor = Math.ceil(n / w);
    let numFloor = Math.ceil(num / w);

    let rLast = ((n - 1) % w) + 1;   // n이 자기 층에서 몇 번째로 놓였는지 (1~w)
    let rNum  = ((num - 1) % w) + 1; // num이 자기 층에서 몇 번째로 놓였는지 (1~w)

    if (totalFloor % 2 === 0) lastPos = w - rLast;
    else lastPos = rLast - 1;

    if (numFloor % 2 === 0) numPos = w - rNum;
    else numPos = rNum - 1;

    let count = totalFloor - numFloor;
    let filled = (totalFloor % 2 === 0) ? (numPos >= lastPos) : (numPos <= lastPos);
    if (filled) count += 1;

    return count;
}