//  find the maximum number in an array and its time complexity

let arr = []  // (c)
arr = [1, 2, 4, 5, 87, 6, 7, 98, 4, 6, 747, 5, 4, 76, 52, 48]  // (16c)
let max = arr[0]
for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {  // (c)
        max = arr[i]     // (c)
    }
}
console.log(max)


/* total time complexity  c + loop(c+c)  and loop depemds upon arr size
                              ==> c + 16*2c ===>> c + 32c  ==>> 33c
                               Big Oh notation  O(n)  Because loop depends upon arr size
*/