const repeatString = function(string, repeatCount) {
    let repeatString = "";
    if (repeatCount < 0) return "ERROR";
    for (let i = 0; i < repeatCount; i++){
        repeatString += string;
    }
    return repeatString;
};

module.exports = repeatString;
