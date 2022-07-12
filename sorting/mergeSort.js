
function merge(arr, start, mid, end) {
    let arr1 = [], arr2 = [];
    let a = 0, b = 0, c = start;
    let lenArr1 = mid - start + 1
    let lenArr2 = end - mid

    for (let i = 0; i < lenArr1; i++) {
        arr1[i] = arr[start + i];
    }

    for (let j = 0; j < lenArr2; j++) {
        arr2[j] = arr[mid + 1 + j]
    }

    while (a < lenArr1 && b < lenArr2) {
        if (arr1[a] <= arr2[b]) {
            arr[c] = arr1[a]
            a++
        }
        else {
            arr[c] = arr2[b]
            b++
        }
        c++
    }

    while (a < lenArr1) {
        arr[c] = arr1[a];
        a++;
        c++;
    }

    while (b < lenArr2) {
        arr[c] = arr2[b];
        c++;
        b++;

    }
    return arr
}


function mergeSort(arr, start, end) {
    if (start >= end) return

    let mid = parseInt((start + end) / 2);
    mergeSort(arr, start, mid);
    mergeSort(arr, mid + 1, end);

    return merge(arr, start, mid, end)
}

console.log(mergeSort([2,5,4,6,8,9,2,1,6,9],0,9))