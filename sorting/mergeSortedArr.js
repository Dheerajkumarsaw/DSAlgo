let array1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,15,16,18,19,20]
let array2 = [1,2,3,4,5,6,7,8,9,10]
let m = array1.length
let n = array2.length
function merge(array1,array2,m,n){
    let c=0 ,result = []
    let i = 0, j =0 
    while(i<m && j <n){
        if(array1[i] < array2[j]){
            result[c] = array1[i]
            i++
            c++
        }else{
            result[c] =array1[j]
            j++
            c++
        }
    }
    while(i<m){
        result[c] = array1[i]
        i++
        c++
    }
    while(j<n){
        result[c] = array2[j]
        j++
        c++
    }
    return result
}

console.log(merge(array1,array2,m,n))