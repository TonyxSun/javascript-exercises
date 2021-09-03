const reverseString = function(str) {
    let charArray = [];
    let reversedStr = "";
    let strLength = str.length;
    for (let i = 0; i < strLength; i++){
        charArray.push(str.charAt(i));
    }

    for (let j = 0; j < strLength; j++){
        reversedStr += charArray.pop();
    }
    return reversedStr;
};

module.exports = reverseString;
