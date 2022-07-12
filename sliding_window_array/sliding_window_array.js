/**
 * sliding window is the  another approach of  DSA  it used  when  have  to find the sum 
 * consecutive  element  and  largest  element  of window
 */

//    #########    BASIC   APPROACH     ##########



//  NAIVE  APPROACH

/**   let arr = [13, 34, 6, 2, 43, 89, 9, 3, 2, 9]
 * 
 *    let  sum = 0 
 *    let max = 0
 *   for(let i =0 to  arr.length){
 *      for(let i =0 to  arr.length){
 *          sum += arr[i]
 *            if(max < sum){
 *              max = sum
 *              also  store  that  array (i.e   window)
 *              }
 *          }
 *      }
 *      return
 * */


//  ######## ============       OPTIMAL   APPROACH    =============   #######

let arr = [13, 34, 6, 2, 43, 89, 9, 3, 2, 9, 100, 80]
let window = 4
let si = 0, ei = 0
let max = 0, sum = 0

for (let i = 0; i < window; i++) {
    sum += arr[i]
    ei = i
}
max = sum

// console.log(sum)
// let arr = [13, 34, 6, 2, 43, 89, 9, 3, 2, 9, 100, 80]

for (let i = 1; i < arr.length - window + 1; i++) {
    sum = sum + arr[i + window - 1] - arr[i - 1]
    // console.log(sum)
    if (max < sum) {
        max = sum
        si = i
        ei = i + window - 1
    }
}

let result = []
for (let i = si; i <= ei; i++) {
    result.push(arr[i])
}

// console.log(max, result, si, ei)

//===========================      FIND   LARGEST  ELEMENT   IN  WINDOW     ==================
/**
 * in which case element  will not needed  in window it will remove
 *      1  case  ==>  while element  does  not inside  the window
 *      2  case ==>  while  element  inside  curr window is  less than  incoming  element (from last)
 *      else  apped element  in  last of window
 */
let array = [1,8, 3, -1, -3, 5, 3, 6, 7]
let n = array.length
let que = [], w = 3
let result1 = []
for (let cel = 0; cel < w; cel++) {
    while (que.length > 0 && array[cel] >= que[que.length - 1]) {
        que.pop();  //  removing elemen  from que's last which ic less thann the coming element 
    }
    que.push(cel)

}

console.log(que)

for (let cel = w; cel < n; cel++) {
    result1.push(array[que[0]]);

    while (que.length > 0 && array[cel] >= array[que[que.length - 1]]) {
        que.pop()
    }

    while (que.length > 0 && cel - w >= que[0]) {
        que.shift();
    }

    que.push(cel)
}

result1.push(array[que[0]])

console.log(result1)