function solution(bandage, health, attacks) {
// bandage -> [기술 시전 시간, 1초당 회복량, 끝까지 성공시 추가 회복량]
// health -> 캐릭터 최대 체력
// attacks -> [[몬스터의 공격 시간, 피해량],[몬스터의 공격 시간, 피해량],[몬스터의 공격 시간, 피해량]...] 공격 시간 기준 오름차순. 공격 시간은 모두 다름
    
    // 기술 소요 시간, 1초당 회복량, 끝까지 성공시 추가 회복량
    const [totalTime, secHeal, bonusHeal] = bandage;
    let curHealth = health; // 현재 체력
    let curAttack = 0; // 앞으로 공격할 공격 정보 배열 순서
    const lastAttack = attacks[attacks.length - 1][0]; // 마지막 공격 시간
    let healDuration = 0; // 붕대감기 연속 시전 시간
    let isDie = false; // 죽었는지 여부
    
    for(let i = 1; i <= lastAttack; i++){
        if(i === attacks[curAttack][0]){ // 공격 타이밍이라면
            curHealth -= attacks[curAttack][1];
            healDuration = 0;
            curAttack++
            if(curHealth <= 0){
                isDie = true;
                break;
            }
        } else { // 공격 타이밍이 아니라면
             // 현재 체력이 최대 체력보다 작다면(힐 가능하다면)
            if(curHealth < health){
                curHealth += secHeal;
            }
            healDuration++;
            if(healDuration === totalTime){
                curHealth += bonusHeal;
                healDuration = 0;
            }
            if(curHealth > health){
                curHealth = health;
            }
        }
    }
    
    return isDie ? -1 : curHealth;
}