let arr = [4, 1, 1, 1, 2, 3, 5]
let k = 5
let ws = 0, we = 0
let sum = 0, max = 0
let rwe = we, rws = ws

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    if (sum == k) {
        if (max < we - ws + 1) {
            max = we - ws + 1
            rwe = we
            rws = ws
        }
    }

    if (sum > k) {
        while (sum > k) {
            sum -= arr[ws]
            ws++
        }
    }

}
console.log(max, rwe, rws)