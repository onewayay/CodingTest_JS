function solution(id_list, report, k) {
    // id_list : 유저 id 배열
    // report : "사용자 신고대상" 형태의 정보가 담긴 배열
    // k : 정지 기준이 되는 신고 횟수
    
    // 각 id별로 누가 신고했는지 기록하는 배열
    let idReporter = {};
    // 메일 받는 횟수
    let mailCount = {};
    // id 순서대로 메일 받는 횟수 (답)
    let answer = [];
    
    const newReport = [...new Set(report)];
    
    // reportCount id별 빈배열로, mailCount는 0으로 초기화
    for(let i = 0; i < id_list.length; i++){
        const name = id_list[i];
        idReporter[name] = [];
        mailCount[name] = 0;
    }

    newReport.forEach((names)=>{
        // a: 신고한 사람 , b: 신고 대상자
        const [a, b] = names.split(" ");
        
        // idReporter의 신고 대상자 배열에 신고자 넣음
        idReporter[b].push(a);
    })
    
    // idReporter 순회하면서 각 속성의 길이가 k보다 길거나 같은지 확인하고
    // 길거나 같다면 해당 속성 값을 순회하면서 속성 값의 id들의  mailCount를 1씩 증가
    for (const id in idReporter) {
        if(idReporter[id].length >= k){
            for(let i = 0; i < idReporter[id].length; i ++){
                mailCount[idReporter[id][i]] ++;
            }
        }
    }
    
    // 신고 메일 받는 횟수 answer 배열에 넣ㄱ기 
    for(let i = 0; i < id_list.length; i++){
        answer.push(mailCount[id_list[i]]);
    }
    
    return answer;
}