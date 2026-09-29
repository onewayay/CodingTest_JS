function solution(picks, minerals) {
  const cost = [
    [1, 1, 1],    // 다이아 곡괭이
    [5, 1, 1],    // 철 곡괭이
    [25, 5, 1],   // 돌 곡괭이
  ];
  const idx = { diamond: 0, iron: 1, stone: 2 };

  const totalPicks = picks.reduce((a, b) => a + b, 0);

  // 1. 곡괭이 개수만큼만 5개씩 묶고, 곡괭이별 피로도 계산
  const groups = [];
  for (let i = 0; i < minerals.length && groups.length < totalPicks; i += 5) {
    const chunk = minerals.slice(i, i + 5);
    const fatigue = [0, 0, 0];
    chunk.forEach((m) => {
      for (let p = 0; p < 3; p++) fatigue[p] += cost[p][idx[m]];
    });
    groups.push(fatigue);
  }

  // 2. 돌 곡괭이 기준 피로도 내림차순
  groups.sort((a, b) => b[2] - a[2]);

  // 3. 좋은 곡괭이부터 배정
  let answer = 0;
  for (const fatigue of groups) {
    const p = picks.findIndex((count) => count > 0);
    picks[p]--;
    answer += fatigue[p];
  }
  return answer;
}