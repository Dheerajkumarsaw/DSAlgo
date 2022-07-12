psedo code for checking array element pair sum zero

here an sorted array is given if not then sort first
 array = [1,2,4,5,4,3,6,85]

=========   Approch   ===========
for i to array.length - 1{
    for j = i+1 to array.length 
    if(array[i+j] + array[j] ==  sum){
        return [array[i+j] , array[j]]
    }
}
return false 

Time complexity   O(n^2)

===============    optimal  Approch    ===========
1st sort array if not sorted
let left  =0 ,right  = array.length - 1

sum  =0  /// some time sum come with request 

while(left < right){
    if(array[left] + array[right] == sum) return [array[left] , array[right]]
    else if(array[left] + array[right] > sum) right--
    else left--
}

return false