function solution(rank, attendance) {   
    const attendanceStudent = [];
    
    for(let i = 0; i < rank.length; i++){
        if(attendance[i] === true){
            attendanceStudent.push(i);
        }
    }
    
    attendanceStudent.sort((a, b) => rank[a] - rank[b]);
    
    const [a, b, c] = attendanceStudent;
    
    const answer = 10000 * a + 100 * b + c;
    
    return answer;
}