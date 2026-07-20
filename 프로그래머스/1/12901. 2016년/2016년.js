function solution(a, b) {
    const monthDays =[31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const days = ['THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED'];
    let sumDays = b;
    
    for(let i = 0; i < a - 1; i++){
        sumDays += monthDays[i];
    }
    
    const lastDay = sumDays % 7;
    
    
    return days[lastDay] ;
}

