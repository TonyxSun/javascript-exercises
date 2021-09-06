const getTheTitles = function(books) {
    let titles = books.map((obj) => {
        return obj.title;
    })
    return titles;
};

module.exports = getTheTitles;
