// multi pointer method is a method to check array elements pair with matching condition
// let arr = [ 4, 2, 3]
let arr = [1, 4, 6, 5, 8, 9, 4, 2, 3]
arr = arr.sort((a, b) => a - b)

// naive approch
function isSumPairPresent(sum) {
    for (let i = 0; i < arr.length; i++) {  /// loop  n times
        for (let j = i + 1; j < arr.length; j++) {   /// loop   n times
            if (arr[i] + arr[j] == sum) {
                return true
            }
        }
    }
    return false
};
// TC  O(n^2)
//console.log(isSumPairPresent(20))

//=======================  optimal approch  =============================
function optimalSum(sum) {
    let left = 0
    let right = arr.length - 1
    // let left = 0, right =arr.length - 1
    while (left < right) {
        if (arr[left] + arr[right] == sum) return [arr[left], arr[right], [left, right]]
        else if (arr[left] + arr[right] > sum) right--
        else left++
    }
    return false
};

// TC  O(n) TC reduced from O(n^2)  to O(n)
console.log(optimalSum(12))


//= =============== code zinger prob ============

function optimalSum1(arr) {
    arr = arr.sort((a, b) => a - b)
    let left = 0,sum=0
    let right = arr.length - 1
    // let left = 0, right =arr.length - 1
    while (left < right) {
        if (arr[left] + arr[right] > sum) {sum = arr[left]+arr[right]}
        else if (arr[left] + arr[right] > sum) right--
        else left++
    }
    return sum
};

// console.log(optimalSum1([100000, 200000, 5667, 677876, 454556, 68985, 908665, 56678, 567877, 9087655]))


