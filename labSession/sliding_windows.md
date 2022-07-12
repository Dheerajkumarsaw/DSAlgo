#####   sliding  is a approce to slove ques of to find max sum of cosecutive numbers or substring   #####

let arr = [23,34,6,2,43,89,9,3,2,7]
here  window =  3
[23,34,6]  ==>  is max
[34,6,2]   ==>  is max
[6,2,43]   ==>  is max
[43,89,9]  ==>  is max
[89,9,3]   ==>  is max    .... and so on
means we have to find the max sum of 3 consecutive  nos

####      OPTIMAL  APPROACH    ####

let max  = 0
let sum = 0
for(let i =0 ;i < window ; i++){
    sum += arr[i]
}
max = sum

####     yahan i hames 1 se strat hoga kyunki hm 0 phle hi add kr liye h    ####
for(let i = 1 ; i< arr.length -window + 1 ; i++){  
    sum = sum + arr[i+window-1] - arr[i-1]
    if(sum > max){
        max = sum
        start = i
        end = i+ window -1
    }
}
return max and elements using loop  which making  max  sum


####    TC  O(n)   #######


#####      FOR  STRING   FIND  SUBSTRING   IN   STRING    #####


let indexStartSub = 0
let indexEndSub = 0

let Swstart   = 0 
let SwEnd  = 0 

let str  =  "hellothere"

windowMap = { }

while(Swstart  < str.length ){
    if(!window[str[Swstart]]){
        windowMap[str[Swstart]] : 1
        if(Swend - Swstart > indexEndSub - indexStartSub ){
            indexStartSub = SWstart
            indexEndSub  = Swend
        }
        Swstart++
    }else{
        while(str[Swstart] != str[Swend]){
            delete.window[str[Swstart]]
            Swstart ++
        }
    }
}

Return   (indexEndSub , indexStartSub)