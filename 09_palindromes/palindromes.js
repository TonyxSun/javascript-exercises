const palindromes = function (string) {
    
    let reverseString = "";
    let newString = "";
    let punctuations = "., !";
    const strLength = string.length;
    for (let i = 0; i < strLength; i++){
        if (!punctuations.includes(string[i])) {
            newString += string[i].toLowerCase();
        }
    }
    for (let i = newString.length -1; i >= 0;i--){ 
        reverseString += (newString[i]);
    }
    return (reverseString === newString);
};

module.exports = palindromes;
