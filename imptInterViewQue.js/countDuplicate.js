//!  count  the duplicate frequency of array element

//~  [2,4,5,6,3,6,7,2,4,3,2,1,5,6,4,1,5,2]

//^  USE HERE  MAP METHOD TO CREATE OBJECT

function duplicate(arr) {

    let map = new Map()
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (map.get(arr[i]) === undefined) {
            map.set(arr[i], 1)
        } else {
            map.set(arr[i], map.get(arr[i]) + 1)
        }
    }

    for(let key of map){

        if(key[1] >1){
            result.push(key[0])
        }
    }
    console.log(result)
}

duplicate([2,4,5,6,3,6,7,2,4,3,2,1,5,6,4,1,5,2])