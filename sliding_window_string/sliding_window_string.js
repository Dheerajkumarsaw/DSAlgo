//=========================     Find the kth distinct  sub string    ==========================================

/** we have  a string   we have to find largest  substring  with distinct  chars  (given window size distinct cahrs)
 *  str  =  aabacbebebe
 *  substrings  aabacb  =>  (6)
 *              abacb   =>  (5)
 *              bacb    =>  (4)
 *              acb     =>  (3)
 *              cbebebe =>  (7)  ans
 *     
 */

function isCurrWindowValid(count, k) {
    let curr_u_c = 0;
    for (let i = 0; i < count.length; i++) {
        if (count[i] > 0) {
            curr_u_c++;
        }
    }

    return k >= curr_u_c;
}


function kthLargestSubString(str, k) {
    let u_char_count = 0;   // unique  chars  count
    let count = []   //it contains  the   frequency   of chars 

    for (let i = 0; i < 26; i++) {
        count.push(0)  /// filling array with  zero
    }
    
    //   counting   the  unique  chars 
    for (let i = 0; i < str.length; i++) {
        if (count[str[i].charCodeAt() - 97] === 0) {
            u_char_count++
        }
        count[str[i].charCodeAt() - 97]++
    }
    if (k > u_char_count) {
        console.log("Substring can not Formed")
        return
    }

    // reset  the  count  array 
    for (let i = 0; i < 26; i++) {
        count[i] = 0
    }

    let start = 0, end = 0;
    let max_win_size = 1, max_win_start = 0;
    count[str[0].charCodeAt() - 97]++

    for (let i = 1; i < str.length; i++) {
        count[str[i].charCodeAt() - 97]++   //  tracking the chars  present in wndow or not
        end++   //  increasing  the   window size

        while (!isCurrWindowValid(count, k)) {
            count[str[start].charCodeAt() - 97]--
            start++
        }

        if (end - start + 1 > max_win_size) {
            max_win_size = end - start + 1;
            max_win_start = start;
        }
    }
    console.log( u_char_count, max_win_size, max_win_start)
}

kthLargestSubString("aabacbebebe", 3)