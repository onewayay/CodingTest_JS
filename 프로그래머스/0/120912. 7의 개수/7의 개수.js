function solution(array) {
    let count = 0;

    for (let num of array) {
        const str = String(num);

        for (let i = 0; i < str.length; i++) {
            if (str[i] === '7') {
                count++;
            }
        }
    }

    return count;
}