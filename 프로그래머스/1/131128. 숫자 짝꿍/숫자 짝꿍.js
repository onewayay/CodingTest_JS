function solution(X, Y) {
    const countX = new Array(10).fill(0);
    const countY = new Array(10).fill(0);

    for (const ch of X) countX[+ch]++;
    for (const ch of Y) countY[+ch]++;

    let result = '';
    for (let d = 9; d >= 0; d--) {
        const cnt = Math.min(countX[d], countY[d]);
        result += String(d).repeat(cnt);
    }

    if (result.length === 0) return '-1';
    if (result[0] === '0') return '0'; // 맨 앞이 0이면 전부 0이라는 뜻
    return result;
}