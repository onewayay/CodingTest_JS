function solution(k, d) {
    // k : 점 간격
    // d : 위치 최대치
    let count = 0;
    for (let x = 0; x <= d; x += k) {
        const maxY = Math.floor(Math.sqrt(d * d - x * x));
        count += Math.floor(maxY / k) + 1;
    }
    return count;
}