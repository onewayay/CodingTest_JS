function solution(s) {
    let sentenceArr = [];

    s.split(" ").forEach((str)=>{
        let sentence = "";
        for(let i = 0; i < str.length; i++){
            if(i % 2 === 0 || i === 0){
                sentence += str[i].toUpperCase();
            } else {
                sentence += str[i].toLowerCase();
            }
        }
        sentenceArr.push(sentence);
    });
    
    return sentenceArr.join(" ");
    
    console.log(sentenceArr);
}