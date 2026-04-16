function solution(babbling) {
    const canPronounce = ["aya", "ye", "woo", "ma"];
    let count = 0;
    
    babbling.forEach((word) => {
        let temp = word;
        
        for (const w of canPronounce) {
            temp = temp.replaceAll(w, " ");
        }
        
        if (temp.trim() === "") count++;
    });
    
    return count;
}