function solution(n) {
  const MOD = 1000000007;
  if (n === 1) return 1;
  let a = 1, b = 2;
  for (let i = 3; i <= n; i++) {
    const next = (a + b) % MOD;
    a = b;
    b = next;
  }
  return b;
}