function solution(today, terms, privacies) {
    let answer = [];
    let termLimit = {};
    
    const [todayY, todayM, todayD] = today.split('.');
    const todayValue = (Number(todayY) * 12 + Number(todayM)) * 28 + Number(todayD); // 오늘 날짜 일 단위로
    
    for(term of terms){
        const [type, month] = term.split(" ");
        termLimit[type] = Number(month);
    }
    

    privacies.forEach((privacy, idx)=>{
        const [startDate, type] = privacy.split(" ");
        const [startY, startM, startD] = startDate.split(".");
        const startDayValue = (Number(startY) * 12 + Number(startM)) * 28 + Number(startD); // 시작 날짜 일 단위로
        
        const endDayValue = startDayValue + termLimit[type] * 28;
        
        if(todayValue >= endDayValue){
            answer.push(idx + 1);
        }
    })

    return answer;
    
}