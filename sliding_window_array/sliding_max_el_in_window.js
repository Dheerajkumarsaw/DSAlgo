/**
 * You are given an array of integers nums, there is a 
 * sliding window of size k which is moving from the 
 * very left of the array to the very right. You can only see 
 * the k numbers in the window. Each time the sliding window moves right by one position.
 */

let nums = [8, 3, -1, -3, 5, 3, 6, 7], k = 3







var maxSlidingWindow = function (nums, k) {
    let maxVal = []
    let que = []

    for (let cel = 0; cel < k; cel++) {

        while (que.length > 0 && nums[que[que.length - 1]] <= nums[cel]) {
            que.pop()
        }
        que.push(cel)

    }
    // console.log(que)
    for (let cel = k; cel < nums.length; cel++) {
        maxVal.push(nums[que[0]])

        while (que.length > 0 && nums[cel] >= nums[que[que.length - 1]]) {
            que.pop()
        }

        while (que.length > 0 && cel - k >= que[0]) {
            que.shift()
        }
        que.push([cel])

    }

    maxVal.push(nums[que[0]])
    return maxVal
};

console.log(maxSlidingWindow(nums, k))