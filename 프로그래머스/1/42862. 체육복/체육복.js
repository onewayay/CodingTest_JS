function solution(n, lost, reserve) {
    // n: 전체 학생의 수 
    // lost: 체육복을 도난당한 학생들의 번호가 담긴 배열
    // reserve: 여벌의 체육복을 가져온 학생들의 번호가 담긴 배열
    
    // 여분의 옷을 가진 학생이 도난 당했다면 lost에서 제거 (남은 한벌 혼자 입으면 됨)
    const reserveStudent = reserve.filter((num)=>{
        return !lost.includes(num);
    }).sort((a, b) => a - b);;
    
    // 잃어버린 학생이 여분이 있다면 reserve에서 제거
    const lostStudent = lost.filter((num)=>{
        return !reserve.includes(num);
    }).sort((a, b) => a - b);;
    
    // 수업 참여 가능 학생 수
    let canJoin = n - lostStudent.length;
    
    lostStudent.forEach((num, i)=>{
        if(reserveStudent.includes(num - 1)){
            const reserveIndex = reserveStudent.indexOf(num - 1);
            canJoin++;
            reserveStudent.splice(reserveIndex, 1);
        } else if(reserveStudent.includes(num + 1)){
            const reserveIndex = reserveStudent.indexOf(num + 1);
            canJoin++;
            reserveStudent.splice(reserveIndex, 1);            
        }
    })
    
    
    
    
    return canJoin;
}