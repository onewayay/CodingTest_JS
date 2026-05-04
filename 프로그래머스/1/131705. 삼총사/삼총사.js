function solution(number) {
    let count = 0;
    
    for(let i = 0; i < number.length; i++){
        let sum1;
        
        sum1 = number[i];
        for(let j = i + 1; j < number.length; j++){
            let sum2;

            sum2 = sum1 + number[j]
            for(let k = j + 1; k < number.length; k++){
                let sum3;

                sum3 = sum2 + number[k]
                if(sum3 === 0) count++
                
            }
        }
    }
    
    return count;
}