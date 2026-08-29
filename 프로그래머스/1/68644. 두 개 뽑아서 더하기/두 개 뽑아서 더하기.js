function solution(numbers) {
    const result = [];
    
    for(let i = 0; i < numbers.length; i++){
        const firstNum = numbers[i];
        for(let j = i + 1; j < numbers.length; j++){
            const secondNum = numbers[j];
            const sum = firstNum + secondNum;
            
            if(!result.includes(sum)) result.push(sum);
        }
    }
    
    return result.sort((a,b) => a - b);
}