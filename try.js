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