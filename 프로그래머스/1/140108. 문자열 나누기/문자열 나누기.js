function solution(s) {
    let rest = s;
    let strs = 0;
    
    while(rest.length > 0){
        const firstStr = rest[0];
        let same = 0;
        let different = 0;
        
        for(let i = 0; i < rest.length; i++){
            rest[i] === firstStr ? same += 1 : different += 1;
            
            if(same === different){
               strs++;
                rest = rest.slice(i + 1);
                break;
            }
            
            if (i === rest.length - 1) {
                strs++;
                rest = '';
            }
        }
    }
    
    return strs;
}