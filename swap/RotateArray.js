///!  Rotate  Array  Cycllically  from  k element

// function rev1(nums, k) {

function rev(arr) {
    let i = 0, j = arr.length - 1
    while (i < j) {
        [arr[i], arr[j]] = [arr[j], arr[i]]
        i++
        j--
    }
    return arr
}

// return nums
// };
let k = 4
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
nums = rev(nums)
console.log(nums)

nums = rev(nums.slice(0, k)).concat(rev(nums.slice(k)))
console.log(nums)
// rev()