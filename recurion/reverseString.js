//!===========     Reverse  string   ===================

//~ ---------------    STRING   ARE  IMMUTABLE  IN JAVASCRIPT  ---------------------


//? =============   using for loop    ==================
let str = "hello"
let res = ""
for (let i = str.length - 1; i >= 0; i--) {
    res += str[i]
}
// console.log(res)

//^================   Recursion  ===============
/**  concept
 * reverse(ello)              + h
 * reverse(llo)           + e + h
 * reverse(lo)        + l + e + h
 * reverse(o)     + l + l + e + h
 * reverse(o) + o + l + l + e + h
 * 
 * 
 *   final  olleh
 * 
 *  */

function revStr(str) {

    if (str.length == 0) {
        return str
    }
    if (str.length == 1) {  /// abse case
        return str[0]
    }
    return revStr(str.slice(1)) + str[0]
}

console.log(revStr("1234567890"))
console.log(revStr("hi there"))
// console.log(revStr("1234567890"))