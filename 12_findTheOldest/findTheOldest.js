let findTheOldest = function (people) {
    const oldest = people.reduce((a, b) => {
        let aDeathYear = a.yearOfDeath? a.yearOfDeath : (new Date()).getFullYear();
        let bDeathyear = b.yearOfDeath? b.yearOfDeath : (new Date()).getFullYear();
        aAge = aDeathYear - a.yearOfBirth;
        bAge = bDeathyear - b.yearOfBirth;
        if (aAge > bAge) {
             return a;
    } else return b;})
    return oldest;
};

module.exports = findTheOldest;
