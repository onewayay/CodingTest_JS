function solution(date1, date2) {
    const sumDate1 = Number(date1.join(''));
    const sumDate2 = Number(date2.join(''));
    
    return sumDate1 < sumDate2 ? 1 : 0;
}