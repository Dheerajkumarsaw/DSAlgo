//!  Remove Duplicate element from Array

function removeDuplicates(arr) {
    let map = new Map()

    for (let i = 0; i < arr.length; i++) {
        if (map.get(arr[i]) == undefined) {
            map.set(arr[i], 1)
        } else {
            map.set(arr[i], map.get(arr[i]) + 1)
        }
    }
    let result = []
    for (let item of map) {
        if (item[1] == 1) {
            result.push(item[0])
        }
    }
    return result
}

console.log(removeDuplicates(([1, 1, 1, 2, 2, 2, 3, 3, 3,  4, 45,  5])))