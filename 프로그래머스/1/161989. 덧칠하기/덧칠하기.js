function solution(n, m, section) {
    let paintCount = 0;
    let paintedEnd = 0;
    
    for(sec of section){
        if(paintedEnd < sec){
            paintCount += 1;
            paintedEnd = sec + m - 1;
        }
    }
    
    return paintCount;
}