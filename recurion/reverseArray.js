//!  REVERS  ARRAY    ELEMENTS

//^   NOT  RECURSION

let arr = [1, 2, 4, 5, 3, 6, 9, 8, 7, 5, 4, 6, 1, 8, 6, 66, 7, 9, 4, 2, 88]
let result = []
for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i])
}
// console.log(result)

//~  ==========      USING RECURSION    ===================

let res = []
function revArray(arr, j) {

    if (j < 0) {
        return res
    }
    let temp = arr[j]
    res.push(temp)
    // arr.pop()
   return revArray(arr,--j)
}

console.log(revArray(arr, arr.length - 1))


//?  ============ 2nd way  ============


/*
let res = []
function revArray(arr) {

    if (arr.length == 0) {
        return res
    }
    let temp = arr[arr.length - 1]
    res.push(temp)
    arr.pop()
    return revArray(arr)
}

console.log(revArray(arr)) 
*/
