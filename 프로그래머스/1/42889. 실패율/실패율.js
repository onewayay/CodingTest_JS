// 실패율 : 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수

function solution(N, stages) {
    // N : 전체 스테이지 개수 
    // stages : 게임을 이용하는 사용자가 현재 멈춰있는 스테이지 번호가 담긴 배열
    // 실패율이 높은 스테이지부터 내림차순으로 스테이지의 번호가 담겨있는 배열을 return
    
    // 정답 배열
    let answer = [];

    // 스테이지별 실패율 담을 객체
    let stageList = {};
    
    //stageList 초기화
    for(let i = 1; i <= N; i++){
        stageList[i] = 0;
    }
    
    for(let i = 1; i <= N; i++){
        let reachingPlayerNum = 0; // 스테이지 도달한 플레이어 수
        let failPlayerNum = 0; // 스테이지 도달했지만 클리어 못한 플레이어 수
        
        for(let j = 0; j < stages.length; j++){
            if(i <= stages[j]){
                reachingPlayerNum++;
            }
            if(i === stages[j]){
                failPlayerNum++
            }
        }
        
        // 스테이지에 도달한 유저가 없는 경우 해당 스테이지의 실패율은 0 으로 정의
        const failureRate = reachingPlayerNum === 0 ? 0 : failPlayerNum / reachingPlayerNum;
        stageList[i] = failureRate;
    }
    
    // stageList의 키를 추출하고 값들을 비교해서 정렬
    // map을 통해 문자열 키들을 숫자로 변경
    answer = Object.keys(stageList).sort((a, b) => stageList[b] - stageList[a]).map((x) => Number(x))

    return answer;
}