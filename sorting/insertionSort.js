//!  Insertion Sort 

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {

        let curr = i
        while (curr >= 1 && arr[curr - 1] > arr[curr]) {
            [arr[curr - 1], arr[curr]] = [arr[curr], arr[curr - 1]]
            curr--
        }
    }
    return arr
}

console.log(insertionSort([9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -8, -5, -2]))

function myInsertionSort(arr) {

    for (let i = 1; i < arr.length; i++) {

        let curr = i
        while (curr >= 1 && arr[curr - 1] > arr[curr]) {
            [arr[curr - 1], arr[curr]] = [arr[curr], arr[curr - 1]]
            curr--
        }
    }
    return arr
}
console.log(myInsertionSort([9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -8, -5, -2]))

