function solution(signals) {
    function gcd(a, b) { return b === 0 ? a : gcd(b, a % b); }
    function lcm(a, b) { return a * b / gcd(a, b); }

    const periods = signals.map(([G, Y, R]) => G + Y + R);
    const totalLcm = periods.reduce(lcm);

    const yellowSets = signals.map(([G, Y, R]) => {
        const period = G + Y + R;
        const times = new Set();
        for (let t = G + 1; t <= totalLcm + period; t += period) {
            for (let sec = 0; sec < Y; sec++) {
                times.add(t + sec);
            }
        }
        return times;
    });

    const common = yellowSets.reduce((acc, set) => 
        new Set([...acc].filter(t => set.has(t)))
    );

    return common.size > 0 ? Math.min(...common) : -1;
}