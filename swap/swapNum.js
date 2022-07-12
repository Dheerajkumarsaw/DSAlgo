//! Swap two Numbers Without  using third variable

function swapNum(a, b) {
    a = a + b
    b = a - b
    a = a - b
    return [a, b].join(" ")
}

// console.log(swapNum(10, 45))

