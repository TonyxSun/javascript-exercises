const removeFromArray = function(arr, removeItems) {
    let args = Array.from(arguments);
    // let arrLength = arr.length;
    for (let i = arr.length-1;  i >= 0; i--){
        for (let j = 1; j < args.length; j++){
            if (args[j] === arr[i]){
                arr.splice(i, 1);
            }
        }
    }
    return arr;
};

module.exports = removeFromArray;
