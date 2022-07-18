//!  quick  Sort

function getCorrectPositionOfPivot(arr, left, right) {
    // taking right most element as a pivot

    let pivot = arr[right];
    let correctPositionForPivotSoFar = left - 1;
    // why right-1 why not right
    // reason because right most element is the pivot
    for (let curr = left; curr <= right - 1; curr++) {

        if (pivot > arr[curr]) {
            correctPositionForPivotSoFar++;
            [
                arr[correctPositionForPivotSoFar],
                arr[curr]
            ] =
                [
                    arr[curr],
                    arr[correctPositionForPivotSoFar]
                ]
        }
    }

    [
        arr[correctPositionForPivotSoFar + 1],
        arr[right]
    ] =
        [
            arr[right],
            arr[correctPositionForPivotSoFar + 1]
        ]
    return correctPositionForPivotSoFar + 1
}


function quickSort(arr, left, right) {
    if (left >= right) {
        return;
    }

    let correctPositionOfPivot = getCorrectPositionOfPivot(arr, left, right);
    // left side of pivot
    quickSort(arr, left, correctPositionOfPivot - 1)
    // right side of pivot
    quickSort(arr, correctPositionOfPivot + 1, right)
}

let arr = [9, 8, 7, 6, 5, 4, 3, 2, 1]
quickSort(arr, 0, arr.length - 1);
console.log(arr)