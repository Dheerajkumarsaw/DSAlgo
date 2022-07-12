//!  swap Array elements  without  using new array

function swapArray(arr) {
    let i = 0
    let j = arr.length - 1
    while (i < j) {
        arr[i] = arr[i] + arr[j]
        arr[j] = arr[i] - arr[j]
        arr[i] = arr[i] - arr[j]
        j--
        i++
    }
    return arr
}

console.log(swapArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))