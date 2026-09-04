function solution(participant, completion) {
    let answer = '';
    
    let participantObj = {}
    
    participant.forEach((name)=>{
        participantObj[name] = (participantObj[name] || 0) + 1;
    })
    
    completion.forEach((name)=>{
        participantObj[name] = participantObj[name] - 1;
    })
    
    for(let name in participantObj){
        if(participantObj[name] === 1){
             answer = name;
            break;
        }
    }
    return answer;
}