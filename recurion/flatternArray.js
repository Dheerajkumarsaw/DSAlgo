//!  Given  [1,2,[3,4,[5,6,[7,8]]],9,0,[1,2,3,[5,6]]]  ==>   to   [1,2,3,4,5,6,7,8,9,0,1,2,3,,5,6]

function flatArray(arr) {

    let flat = []
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i]) == false) {  //  if array nho hoga to push kr dega
            flat.push(arr[i])
        } else {   //~nhi hoga to usi array  fr loop chalega to make falttern
            flat = flat.concat(flatArray(arr[i]))
        }
    }
    return flat
}

console.log(flatArray([1, 2, [3, 4, [5, 6, [7, 8]]], 9, 0, [1, 2, 3, [5, 6]]]))