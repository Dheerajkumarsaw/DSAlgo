####    HASH  MAP   IS BASICALLY USED  FOR  FREQUENCY  COUNTING     #####

first  we  make  object  because  object key  accessing time is  TC (1)


Que 1.  Let  arr  = [1,2,3,4,5,6]  ,  arr1  =[1,4,9,16,25,36]  her we have
             check that square of array elements is exist in arr1 or not 

 Que 2. Let str  =  “level”  , str2  = “lleev”  is anagram of str or not

######       Naive Approach       ######

for(i over arr){
for( j over arr1){
 if(arr[ i ] * arr[ i ] != arr1[ j ]){
	Return  No
        }
   }
}
Return yes

######    Optimal Approach   #########

Let obj1 = { }
Let obj2 = { }

for( i over arr ){
obj1[ i ] = (obj1[ i ] || 0 ) +1
}

for( j over arr1) {
obj2[ i ] = (obj2[ i ] || 0 ) +1
}
for(key in obj1){

if(obj1[key] != obj2[key*key]) return false

}   
return true



#####       For   string             #########
#####        Optimal Approach         #########

Let obj1 = { }
Let obj2 = { }

for( i over arr ){
obj1[ i ] = (obj1[ i ] || 0 ) +1
}

for( j over arr1) {
obj2[ i ] = (obj2[ i ] || 0 ) +1
}

obj1={
  "l" : 2 ,
  "v" : 1 ,
  "e" : 2 
}

obj2 = {
  "l" : 2 ,
  "e" : 2 ,
  "v" : 1
}
for(key in obj2){   str  ke case m obj2 se compare kro
    if(obj1[key] != obj2[key*key]) {
        return false
        } 

}
  return true
