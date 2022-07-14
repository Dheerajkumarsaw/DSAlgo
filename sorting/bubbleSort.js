//!  my way
function bubbleSortMy(arr) {

    let temp = false;
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
            temp = true
        }
    }
    if (!temp) {
        return arr
    }
    return bubbleSortMy(arr)
}


console.log(bubbleSortMy([2, 5, 4, 6, 3, 4, 8, 0, 1, 6, -6, -9, -8]))

//!  sir

function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {

        let temp = false;
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                temp = true
            }
        }
        if (temp == false) {
            return arr
        }
    }
    return arr
}

// console.log(bubbleSort([2, 5, 4, 6, 3, 4, 8, 0, 1, 6, -6, -9, -8]))
