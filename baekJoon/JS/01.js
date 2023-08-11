const fs = require('fs');
const stdin = 
  fs.readFileSync(0, 'utf-8')
  .trim()
  .split('\n');
const input = (() => {
  let line = 0;
  return () => stdin[line++].split(' ').map(Number);
})();


const [N, K] = input();
const dp = Array.from({ length: N + 1 }, () => Array(K + 1).fill(0));

for (let i = 1; i < N + 1; i++) {
  const [W, V] = input();
  for (let j = 1; j <= K; j++) {
    if (j - W >= 0) dp[i][j] = Math.max(dp[i - 1][j - W] + V, dp[i - 1][j]);
    else dp[i][j] = dp[i - 1][j];
  }
}

console.log(dp[N][K]);