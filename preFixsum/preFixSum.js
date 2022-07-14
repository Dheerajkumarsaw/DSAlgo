//! TC O(n)
function preFixSum(arr, preSum) {
    let prifix = [0]
    let result = []

    for (let i = 0; i < arr.length; i++) {
        prifix.push(prifix[i] + arr[i])
    }
    for (let i = 0; i < preSum.length; i++) {

        result.push(prifix[preSum[i][1] + 1] - prifix[preSum[i][0]])

    }
    console.log(prifix)
    return result
}

console.log(preFixSum([5, 2, 3, 6, 4, 5, 8], [[1, 2], [2, 5], [1, 4], [0, 2]]))


//! TC O(n*n)
function preFixSumTCN(arr, preSum) {
    let result = []

    for (let i = 0; i < preSum.length; i++) {

        let sum = 0
        for (let j = preSum[i][0]; j <= preSum[i][1]; j++) {
            sum += arr[j]
        }
        result.push(sum)
    }

    return result
}
console.log(preFixSumTCN([5, 2, 3, 6, 4, 5, 8], [[1, 2], [2, 5], [1, 4], [0, 2]]))