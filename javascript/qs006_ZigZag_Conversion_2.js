/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows == 1 || numRows >= s.length){
        return s;
    }
    var next = numRows * 2 - 2;
    var middle = next;
    var converted = "";
    
    for(var i = 0; i < numRows; i++){
        for(var j = i; j < s.length; j+=next){
            converted += s.charAt(j);
            if(middle != next && middle > 0){
                converted += s.charAt(j + middle);
            }
        }
        middle-= 2;
    }
    
    return converted;
    
};

let start = Date.now()
console.log(convert('ABc', 2))
console.log(`running ${Date.now() - start} ms`)
