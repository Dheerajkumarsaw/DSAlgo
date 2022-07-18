let arr = [
    { name: 1, value: 93 }, { name: 0, value: 59 }, { name: 1, value: 7 }, { name: 0, value: 24 },
    { name: 1, value: 83 }, { name: 0, value: 83 }, { name: 1, value: 93 }, { name: 0, value: 93 }
]

let result = []
let len1 = 0
let len0 = 0
let set = new Map()
for (var i = 0; i < arr.length; i++) {
    if (arr[i].name == 1) {
        if (set.get("name1")) {
            set.set("name1", set.get("name1") + arr[i].value)
        } else {
            set.set("name1", arr[i].value)
        }
        len1++
    }
    if (arr[i].name == 0) {
        if (set.get("name0")) {
            set.set("name0", set.get("name0") + arr[i].value)
        } else {
            set.set("name0", arr[i].value)
        }
        len0++
    }

}
for (let el of set) {
    if (el[0] == "name0") {
        result.push({ name: 0, avg_value: el[1] / len0 })
    }

    if (el[0] == "name1") {
        result.push({ name: 1, avg_value: el[1] / len1 })
    }
}
// console.log(len1)
console.log(result)