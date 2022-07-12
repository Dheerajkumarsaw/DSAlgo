//  Recutsion :- Recursion means function calling itself

function nthSum(n) {
    if (n == 0) {
        return 0
    }

    return n + nthSum(--n)
}
// console.log(nthSum(10))

//===================================  Recursion  Factorial  =================

function nthMultiply(n) {
    if (n == 1) {
        return n
    }

    return n * nthMultiply(--n)
}

// console.log(nthMultiply(5))

//==========================   Recursion   ===================

