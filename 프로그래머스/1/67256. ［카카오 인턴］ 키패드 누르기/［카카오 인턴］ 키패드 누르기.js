function solution(numbers, hand) {
    let answer = '';
    let left = '*';
    let right = '#';

    const keypad = [
        ['1','2','3'],
        ['4','5','6'],
        ['7','8','9'],
        ['*','0','#']
    ];

    // 특정 key가 몇행 몇열에 있는지 찾는 함수
    const getPos = (key) => {
        for (let r = 0; r < 4; r++) {
            for (let c = 0; c < 3; c++) {
                if (keypad[r][c] === String(key)) return [r, c];
            }
        }
    };

    // 거리 구하는 함수
    const getDist = (a, b) => {
        const [r1, c1] = getPos(a);
        const [r2, c2] = getPos(b);
        return Math.abs(r1 - r2) + Math.abs(c1 - c2);
    };

    numbers.forEach((num) => {
        if (num === 1 || num === 4 || num === 7) {
            answer += 'L';
            left = num;
        } else if (num === 3 || num === 6 || num === 9) {
            answer += 'R';
            right = num;
        } else {
            const distL = getDist(left, num);
            const distR = getDist(right, num);

            if (distL < distR) {
                answer += 'L';
                left = num;
            } else if (distR < distL) {
                answer += 'R';
                right = num;
            } else {
                if (hand === 'right') {
                    answer += 'R';
                    right = num;
                } else {
                    answer += 'L';
                    left = num;
                }
            }
        }
    });

    return answer;
}