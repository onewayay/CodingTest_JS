function solution(fees, records) {
    // fees : 주차요금 (기본시간(분), 기본 요금(원), 단위 시간(분), 단위요금 (원))
    // records : 입/출차 기록
    
    const recordObj = {};
    
    records.forEach((record)=>{
        const [time, num, type] = record.split(" ");
        const hour = Number(time.split(":")[0]);
        const min = Number(time.split(":")[1]);
        const minTime = hour * 60 + min;

        
        if(!recordObj[num]){ // recordObj[num]이 이미 만들어져있지 않다면 (이미 입/출차 기록이 없다면) -> 새로 객체 만든다
            recordObj[num] = {
                totalTime: 0,
                lastRecord: minTime,
                type: type
            }   
        }else{ // 이미 만들어져 있다면 -> totalTime과 lastRecord 수정한다
            if(type === 'OUT'){
                const passTime = minTime - recordObj[num].lastRecord;
                recordObj[num].totalTime += passTime; 
            }
            recordObj[num].lastRecord = minTime;
            recordObj[num].type = type;
        }
    });
    
    // IN으로 끝난 차량은 23:59에 출차한 것으로 처리
    Object.values(recordObj).forEach((car) => {
      if (car.type === 'IN') {
        car.totalTime += 1439 - car.lastRecord;  // 1439는 -> 23:59 = 23 * 60 + 59
      }
    });
    
    const sortedRecordObj = Object.keys(recordObj).sort((a,b) => a - b);
    let sortedFees = [];
    
    const [basicTime, basicCharge, unitTime, unitCharge] = fees;
    sortedRecordObj.forEach((num)=>{
        const targetTime = recordObj[num].totalTime;
        let targetCharge = 0;
        
        if(targetTime <= basicTime){
            targetCharge = basicCharge;
        }else{
            targetCharge = basicCharge + Math.ceil((targetTime - basicTime) / unitTime) * unitCharge;
        }
        
        sortedFees.push(targetCharge)
    })

    return sortedFees;
    
}