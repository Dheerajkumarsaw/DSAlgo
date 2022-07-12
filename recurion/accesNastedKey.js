//!  write  a programme to add even no of keys

let obj = {
    outer: 2,
    obj2: {
        inner: 4,
        inner1: 5,
        otherObj: {
            inner2: 8,
            superInner: 7,
            newObj: {
                even: 10,
                noteven: 15
            }
        },
        yes: {
            pure: 12,
            sure: 21
        }
    }
}

function evenSum(obj) {

    let sum = 0
    for (let key in obj) {

        if (typeof (obj[key]) !== null && typeof (obj[key]) === "object") {
            sum += evenSum(obj[key])   //~ if here  another object comming
        } else {
            if (typeof (obj[key]) === "number") {
                if (obj[key] % 2 === 0) {
                    sum += obj[key]
                }
            }
        }
    }
    return sum
}

console.log(evenSum(obj))