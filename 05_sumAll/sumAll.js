const sumAll = function(startNum, stopNum) {
    let sum = 0;
    if (startNum > stopNum){
        let temp = startNum;
        startNum = stopNum;
        stopNum = temp;
    }
    if (startNum < 0 || stopNum < 0 || typeof(startNum)!= "number" || typeof(stopNum) != "number") return "ERROR";
    for (let i = startNum; i <= stopNum; i++){
        sum += i;    }
    return sum;
};

module.exports = sumAll;
