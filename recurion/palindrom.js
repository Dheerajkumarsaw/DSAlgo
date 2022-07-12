//  ================   Palindrom  String  ===================
// write  a  programme  to check wether string is palindron or not

// using for 
function isplindr() {
    let str = "1221"
    // let str = "13221"
    let result = ""
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i]
    }
    if (str == result) {
        return true
    } else {
        return false
    }
}

// console.log(isplindr())

//   ============    Recursion  1st method  =========

function ispPlind(str) {

    if (str.length == 0) {
        return true
    }

    if (str.length <= 1) return true

    return (str[0] == str.slice(-1) && ispPlind(str.slice(1, - 1)))
}


// console.log(ispPlind("heloleh"))
// console.log(ispPlind("helolveh"))

//===================  Recursion  2nd method   ==================================
//   HERE  COMPARING  str[first]  == str[last] then sliceing it

function isSmplpPlind(str) {

    if (str.length == 0) {
        return true
    }

    if (str.length <= 1) return true

    if (str[0] == str.slice(-1)) return isSmplpPlind(str.slice(1, - 1))

    return false
}

// console.log(isSmplpPlind("heloleh"))

//============   No  Recursion Palindrom   ===============
let result = 0

function noPlind(n) {

    if (n == 0) return result

    let temp = n % 10
    result = result * 10 + temp
    // console.log(result)
    n = parseInt(n / 10)

    return noPlind(n)

    // return result
}
let a = 1212
// let res = noPlind(a)
if (a == res) {
    console.log(true)
} else {
    console.log(false)

}