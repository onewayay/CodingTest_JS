function solution(myString, pat) {
    let count = 0;
    
    for(let i = 0; i < myString.length; i++){
        let cutStr = myString.slice(i);
        if(cutStr.startsWith(pat)){
            count++;
        }
    }
    
    return count;
}