function solution(progresses, speeds) {
    let distribution = [];

    while (progresses.length > 0) {
        for (let i = 0; i < progresses.length; i++) {
            progresses[i] += speeds[i];
        }
        
        let compeltedNum = 0;
        while (progresses[compeltedNum] >= 100) {
            compeltedNum++;
        }

        if (compeltedNum > 0) {
            progresses.splice(0, compeltedNum);
            speeds.splice(0, compeltedNum);
            distribution.push(compeltedNum);
        }
    }

    return distribution;
}