function solution(my_string) {
    let answer = '';

    for (let char of my_string) {
        if (!answer.includes(char)) {
            answer += char;
        }
    }

    return answer;
}