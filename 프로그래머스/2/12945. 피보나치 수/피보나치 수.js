function solution(n) {
    function fib(num) {
      let a = 1;
      let b = 1;
      for (let i = 3; i <= num; i++) {
        let c = (a + b) % 1234567;
        a = b;
        b = c;
      }
      return b;
    }
    return fib(n);
}