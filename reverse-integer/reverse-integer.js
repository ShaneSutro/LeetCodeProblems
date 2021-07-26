/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if (x.toString().length === 1) {
        return x;
    }
    
    const signed = x < 0;
    
    const stringVersion = Math.abs(x).toString()
    const reversed = []
    
    for (var i = stringVersion.length - 1; i >= 0; i--) {
        if (signed && i === stringVersion.length - 1) {
            reversed.push('-')
        }
        reversed.push(stringVersion[i])
    }
    
    const finalNumber = Number(reversed.join(''))
    
    if (finalNumber < -2147483648 || finalNumber > 2147483648 - 1) {
        return 0;
    }
    
    return Number(reversed.join(''))
};