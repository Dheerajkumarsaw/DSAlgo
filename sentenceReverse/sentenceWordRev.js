//!  write Fucntion to reverse sentence word on its place

function reverse(str) {
    if (str.length == 0) {
        return ""
    }
    return reverse(str.slice(1)) + str[0]
}


function sentenceWordRev(str) {
    str = str.split(" ")
    for (let i = 0; i < str.length; i++) {
        str[i] = reverse(str[i])
    }
    return str
}
console.log(sentenceWordRev("i am software enggineer"))