function solution(babbling) {
    let count = 0;
    const words = ["aya", "ye", "woo", "ma"];
    
    babbling.forEach((word) => {
        let curWord = word;
        let prev = "";
        
        while(curWord.length > 0) {
            let matched = false;
            
            for(let i = 0; i < words.length; i++) {
                if(curWord.startsWith(words[i]) && prev !== words[i]) {
                    prev = words[i];
                    curWord = curWord.slice(words[i].length);
                    matched = true;
                    break;
                }
            }
            
            if(!matched) break;
        }
        
        if(curWord === "") count++;
    });
    
    return count;
}