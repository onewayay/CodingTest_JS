function solution(answers) {
    const answer1 = [1, 2, 3, 4, 5];
    const answer2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const answer3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    const scores = [0, 0, 0];

    answers.forEach((answer, i) => {
        if (answer === answer1[i % answer1.length]) scores[0]++;
        if (answer === answer2[i % answer2.length]) scores[1]++;
        if (answer === answer3[i % answer3.length]) scores[2]++;
    });

    const maxScore = Math.max(...scores);

    const answer = scores .map((score, i) => (score === maxScore ? i + 1 : null)).filter(v => v !== null);
    
    return answer; 
}