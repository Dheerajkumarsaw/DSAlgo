/* hash map is a method of DSA to optimize our algorithm
  basically it use to remove use two loops 
 */
//   here we have check that the arr elements square exist in arr1 or not
//  here elements order not matter

// let arr = [1, 2, 4, 3, 6, 7, 8,9]
let arr = [1, 2, 4, 3, 6, 7, 8]
let arr1 = [1, 4, 9, 16, 36, 49, 64]
//   ====================================
/*    naive Approch
        let flag = false
          for i=0  to arr.length - 1{
            for  j=0  to  arr1.length - 1{
                if(arr[i] * arr[i] == arr1[j]){
                    flag  = true
                }
            }
          }
          if(flag) return flag
          return false
 */
// ===========================================
//  =====================     Optimal approch    ========================
function isSquareExist() {
    let obj1 = {}
    let obj2 = {}
    for (let i = 0; i < arr.length; i++) {    ///for  making object becs  hasOwnProperty has TC  O(1)
        if (obj1.hasOwnProperty(arr[i])) {
            obj1[arr[i]] += 1
        } else {
            obj1[arr[i]] = 1
        }
    }
    for (let i = 0; i < arr1.length; i++) {    ///for  making object becs  hasOwnProperty has TC  O(1)
        if (obj2.hasOwnProperty(arr1[i])) {
            obj2[arr1[i]] += 1
        } else {
            obj2[arr1[i]] = 1
        }
    }
    for (let key in obj1) { // comparing  both object  *** array ke case m obj1 se kro campare ***
        if (obj2[key * key] != obj1[key]) {
            return false
        }

    }
    return true //[obj1,obj2]
}
// console.log(isSquareExist())



///=====================    Also  This  method used  for   ANAGRAM string     ==================

let str1 = "level"
let str2 = "lleev"
// let str2 = "lleev0"
function isAnagram() {
    let obj1 = {}
    let obj2 = {}
    for (let i = 0; i < str1.length; i++) {    ///for  making object becs  hasOwnProperty has TC  O(1)
        if (obj1.hasOwnProperty(str1[i])) {
            obj1[str1[i]] += 1
        } else {
            obj1[str1[i]] = 1
        }
    }
    for (let i = 0; i < str2.length; i++) {    ///for  making object becs  hasOwnProperty has TC  O(1)
        obj2[str2[i]] = (obj2[str2[i]] || 0 ) + 1
        // if (obj2.hasOwnProperty(str2[i])) {
        //     obj2[str2[i]] += 1
        // } else {
        //     obj2[str2[i]] = 1
        // }
    }
    for (let key in obj2) { // comparing  both object  *** string ke case m obj2 se kro campare ***
        if (obj2[key] != obj1[key]) {
            return false
        }
        // console.log(key)
    }
    return true //[obj1,obj2]
}
console.log(isAnagram())