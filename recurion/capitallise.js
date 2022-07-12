//!  capitallise  the first   letter of string  of array element

let arr = ["hello", "world", "hi", "dheeraj", "kumar", "saw"]
let result = []
console.log(arr)

for (let i = 0; i < arr.length; i++) {
    let temp = arr[i][0].toUpperCase() + arr[i].slice(1)
    result.push(temp)
}

console.log(result)

//~================   using  Recursion  =============
let res = []
function capitallise(arr) {

    if (arr.length == 0) return res

    res.push(arr[0][0].toUpperCase() + arr[0].slice(1))
    return capitallise(arr.slice(1))
}
console.log(arr)

console.log(capitallise(arr))
