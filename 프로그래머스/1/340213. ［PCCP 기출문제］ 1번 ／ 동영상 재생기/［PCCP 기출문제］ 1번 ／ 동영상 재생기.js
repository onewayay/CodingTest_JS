function solution(video_len, pos, op_start, op_end, commands) {
    /*
    video_len: 동영상의 길이를 나타내는 문자열
    pos: 기능이 수행되기 직전의 재생위치를 나타내는 문자열
    op_start: 오프닝 시작 시각을 나타내는 문자열
    op_end: 오프닝이 끝나는 시각을 나타내는 문자열
    commands: 용자의 입력을 나타내는 1차원 문자열 배열
    */
    
    let nowPos = Number(pos.split(":")[0]) * 60 + Number(pos.split(":")[1]);
    let startPos = Number(op_start.split(":")[0] * 60) + Number(op_start.split(":")[1]);
    let endPos = Number(op_end.split(":")[0] * 60) + Number(op_end.split(":")[1]);
    let totalLen = Number(video_len.split(":")[0] * 60) + Number(video_len.split(":")[1]);
    
    if(nowPos >= startPos && nowPos <= endPos){
        nowPos = endPos;
    }
    
    commands.forEach((command)=>{
        if(command === 'prev'){
            if(nowPos < 10){
                nowPos = 0;
            } else{
                nowPos -= 10;
            }
            
        }else{
            if(nowPos > totalLen - 10){
                nowPos = totalLen;
            } else {
                nowPos += 10;
            }
        }
            
        if(nowPos >= startPos && nowPos <= endPos){
            nowPos = endPos;
        }
    })
    
    let finalMin = Math.floor(nowPos / 60) < 10 ? "0" + Math.floor(nowPos / 60) : Math.floor(nowPos / 60) ;
    let finalSec = nowPos % 60 < 10 ? "0" + nowPos % 60 : nowPos % 60;

    
    return finalMin + ":" + finalSec;

}