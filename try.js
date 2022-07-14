var targetIndices = function (nums, target) {
    //     if(nums.length == 1){

    //     }
    function tem(nums) {
        let temp = false

        for (let i = 0; i < nums.length - 1; i++) {
            if (nums[i] > nums[i + 1]) {
                [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]]
                temp = true
            }
        }
        if (!temp) {
            return nums
        }
        tem(nums)
    }
    nums = tem(nums)
    // console.log(nums)
    let result = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == target) {
            result.push(i)
        }
    }
    return result
};

console.log(targetIndices([1,2,3], 3))










// function merge(array,start ,mid , end){
    //         let arr1 = [] , arr2 = []
    //         let a = 0 ,b = 0 ,c = start;
    //         let arr1Len = mid - start + 1;
    //         let arr2Len = end - mid
            
    //         for(let i= 0 ;i<arr1Len ; i++){
    //             arr1[i] = array[start + i];
    //         }
            
    //         for(let i=0; i<arr2Len; i++){
    //             arr2[i] = array[mid + 1 + i]
    //         }
            
    //         while(a < arr1Len && b < arr2Len){
                
    //             if(arr1[a] <= arr2[b]){
    //                 array[c] = arr1[a];
    //                 a++;
                    
    //             }else{
    //                 array[c] = arr2[b];
    //                 b++;
    //             }
    //         }
            
    //         while(a < arr1Len){
    //             array[c] = arr1[a];
    //             a++;
    //             c++;
    //         }
            
    //         while(b < arr2Len){
    //             array[c] = arr2[b];
    //             b++;
    //             c++;
                
    //         }
    //     }
        
    //      function mergeSort(arr,start ,end){
            
    //         if(start > end) return
    //         let mid = parseInt((start + end) / 2);
    
            
    //         mergeSort(arr , start ,mid);
    //         mergeSort(arr , mid+1 ,end);
            
    //         merge(arr ,start ,mid ,end)
    //     }
    //     head = mergeSort(head , 0 ,head.length)
    //     return head