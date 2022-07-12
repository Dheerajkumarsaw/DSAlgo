/*  asymptotic notation
Three types (Best case,Average case, Worst case)
*/
// example  find 5 in array
let arr = [412,4,5,7,6,7,41,3,4,]
//best case
console.log(arr[2])

//worst case 
for(let i=0;i<arr.length; i++){
    if(arr[i] == 5){
        console.log(arr[i])
        break;
    }else 
    console.log("Element is not in arr")
    break;
}

/*TC of objects  
*/