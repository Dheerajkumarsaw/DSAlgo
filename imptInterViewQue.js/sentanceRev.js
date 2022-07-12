//! Reverse the word of sentence on  its own place

//~   "Today is Monday next day will tuesday"  ==> "yadoT si yadnoM txen yad lliw yadseut"

function reverse(word) {

    if (word.length == 0) return ""

    return reverse(word.slice(1)) + word[0]
}
// console.log(reverse("will tuesday"))

function reverseSentWord(sentence) {

    sentence = sentence.split(" ")
    for (let i = 0; i < sentence.length; i++) {
        sentence[i] = reverse(sentence[i])
    }
    return sentence.join(" ")
    // console.log(setence)
}

console.log(reverseSentWord("Today is Monday next day will tuesday"))