function solution(schedules, timelogs, startday) {
    // schedules : 직원들이 설정한 출근 희망 시간 배열
    // timelog : 각 직원들이 한주간 출근한 시간 2차원 배열
    // startday : 시작한 요일 (1 -> 월 ... 7 -> 일)
    // 출근 희망 시간 +10분까지 OK, 주말은 신경 ㄴㄴ
    // 상품 받을 직원은 몇명?
    
    // 상품 받을 직원 수
    let count = 0;
    
    function addMinutes(time) {
        let h = Math.floor(time / 100);
        let m = time % 100 + 10;
        if(m >= 60) { h++; m -= 60; }
        return h * 100 + m;
    }

    for(let i = 0; i < schedules.length; i++){
        let attendanceOk = true; // 제대로 출석하는지 여부
        let day = startday; // 요일
        
        for(let j = 0; j < 7; j++){
            if(day !== 6 && day !==7){ // 토, 일 아닐경우
                if(timelogs[i][j] > addMinutes(schedules[i])){ // 지정 시각 + 10 넘어간 시간에 출석하면 attendanceOk false
                    attendanceOk = false
                }
            } 

            if(attendanceOk === false) break; // false면 더 볼 것도 없음
            day = (day === 7) ? 1 : day + 1; // 요일 넘기기
        }
        
        if(attendanceOk === true) count++; // 1주간 잘 나온사람 있으면 count 하나 증가
    }
    
    return count;
}