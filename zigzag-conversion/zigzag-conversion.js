/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1) {
        return s;
    }
    
    let incrementing = true
    let arrayIndex = 0;
    const allArrays = []
    for (let i = 0; i < numRows; i++) {
        allArrays[i] = []
    }
    
    for (let letter = 0; letter < s.length; letter++) {
        console.log(arrayIndex)
        allArrays[arrayIndex].push(s[letter])
        if (incrementing) {
            arrayIndex++;
        } else {
            arrayIndex--;
        }
        
        if (arrayIndex === numRows) {
            incrementing = false;
            arrayIndex -= 2;
        } else if (arrayIndex < 0) {
            incrementing = true;
            arrayIndex += 2;
        }
    }

    let combinedList = [];
    allArrays.forEach((row) => combinedList = combinedList.concat(row));
    
    return combinedList.join('');
    
};