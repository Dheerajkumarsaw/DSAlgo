function binarySearch(arr, start, end, num) {

    if (start <= end) {

        // let mid = parseInt((start + end) / 2);
        let mid = parseInt((start + (end - start)/2));  // both are acceptable
        if (num === arr[mid]) {
            return [mid, true]
        } else if (num > arr[mid]) {
            return binarySearch(arr, mid + 1, end, num);
        } else {
            return binarySearch(arr, start, mid - 1, num)
        }
    }
    return false

}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 52, 85, 88, 98, 155, 160, 456, 2458, 7845, 3249797, 254861458]
console.log(binarySearch(arr, 0, arr.length, 456))