//! Top optimal Approch
function optimizefib(n) {
    let prev2 = 0, prev = 1
    let curr = 0

    for (let i = 2; i <= n; i++) {
        curr = prev + prev2
        prev2 = prev
        prev = curr
    }

    return curr
}

//! Memoizaton technique  
//?  Top down Appproch
function fib(n, dp) {
    if (n <= 0) return 0

    if (n == 1) return 1

    if (dp[n] != -1) return dp[n]

    dp[n] = fib(n - 1, dp) + fib(n - 2, dp)

    return dp[n]
}
// let n = 6
// let dp = new Array(n + 1).fill(-1)
// console.log(fib(n, dp))
// console.log(dp)

//! Bottom up Approch
//? here we know the bottom solution that's started with bottom up approach
function BottomFib(n) {
    let dp = []
    dp[0] = 0
    dp[1] = 1

    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]
    }

    return dp[n]
}

console.log(BottomFib(25))