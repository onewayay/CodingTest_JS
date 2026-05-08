/*
    - 두 사람이 선물을 주고받은 기록이 있다면, 이번 달까지 두 사람 사이에 더 많은 선물을 준 사람이 다음 달에 선물을 하나 받음
    - 두 사람이 선물을 주고받은 기록이 하나도 없거나 주고받은 수가 같다면, 선물 지수가 더 큰 사람이 선물 지수가 더 작은 사람에게 선물을 하나 받음
    
    ! 선물지수 -> 이번 달까지 내가 친구들에게 준 선물 수 - 받은 선물 수
    
    - 만약 두 사람의 선물 지수도 같다면 다음 달에 선물을 주고받지 않음
    
    ==> 다음 달에 선물을 주고받을 때, 선물을 가장 많이 받을 친구가 받을 선물의 수
*/

function solution(friends, gifts) {
    // freinds : 친구들의 이름을 담은 1차원 문자열 배열
    // gifts : 이번 달까지 친구들이 주고받은 선물 기록을 담은 1차원 문자열 배열
    
    let giftIndex = {}; // 선물 지수 (준 선물 - 받은 선물)
    let pairRecord = {}; // A→B 사이의 기록: pairRecord["A"]["B"] = A가 B에게 준 횟수
    let nextMonth = {}; // 친구별 다음달 받을 예상 선물 횟수 저장할 객체 선언
    
    // giftIndex, pairRecord, nextMonth 객체 초기화
    friends.forEach((name)=>{
        giftIndex[name] = 0;
        nextMonth[name] = 0;
        pairRecord[name] = {};
        friends.forEach((to) => {
            pairRecord[name][to] = 0;
        });
    })
    
    // gifts를 순회하면서 각 친구별 준 선물, 받은 선물 숫자 nextMonth 객체에 정리
    gifts.forEach((gift)=>{
        const [giver, taker] = gift.split(" ");
        
        pairRecord[giver][taker]++;
        giftIndex[giver]++;  // 준 사람 +1
        giftIndex[taker]--;  // 받은 사람 -1
    })
    
    for(let i = 0; i < friends.length; i++){
            for(let j = i + 1; j < friends.length; j++){
            const A = friends[i];
            const B = friends[j];
            
            const aToB = pairRecord[A][B]; // A가 B에게 준 횟수
            const bToA = pairRecord[B][A]; // B가 A에게 준 횟수
                
            if (aToB > bToA) {
                nextMonth[A]++;
            } else if (bToA > aToB) {
                nextMonth[B]++;
            } else {
                // 주고받은 기록이 같거나 없으면 → 선물 지수 비교
                if (giftIndex[A] > giftIndex[B]) {
                    nextMonth[A]++;
                } else if (giftIndex[B] > giftIndex[A]) {
                    nextMonth[B]++;
                }
                // 선물 지수도 같으면 아무것도 안 함
            }
        }
    }
    

    return Math.max(...Object.values(nextMonth));
}