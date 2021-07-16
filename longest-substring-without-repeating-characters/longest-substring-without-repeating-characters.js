/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let longest = 0;
    for (var i = 0; i < s.length; i++) {
        const chars = {};
        let length = 1;
        chars[s.slice(i, i +1)] = 1;
        for (var j = i + 1; j < s.length; j++) {
            let char = s.slice(j, j + 1);
            if (chars[char] === undefined) {
                chars[char] = 1;
                length++;
            } else {
                length > longest ? longest = length : null;
                break;
            }
            length > longest ? longest = length : null;
        }
    }
    longest === 0 ? longest = s.length : null;
    return longest;
};