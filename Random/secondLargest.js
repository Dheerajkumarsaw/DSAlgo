//!   Write a programme to find secound largest no in array

function seccoundLarge(arr) {
    let max = arr[0], result = 0;
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            result = max;
            max = arr[i];
        } else if (result < arr[i]) {
            if(max == arr[i]){
                continue;
            }
            result = arr[i];
        }
    }
    return result;
}

console.log(seccoundLarge([1,2,5,8,6,9,10,10]));