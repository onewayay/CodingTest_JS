function solution(number, limit, power) {
    let iron = 0;

    for (let i = 1; i <= number; i++) {
        let factorCount = 0;

        // factorCount를 총 2번씩 더한다. 약수는 짝을 이루기 때문
        for (let j = 1; j * j <= i; j++) {
            if (i % j === 0) {
                factorCount++;
                if (j * j !== i) {
                    factorCount++;
                }
            }
        }

        iron += factorCount <= limit ? factorCount : power;
    }

    return iron;
}
