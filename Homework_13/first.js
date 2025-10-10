let book = {
  title: "Crime and Punishment",
  author: "Fyodor Dostoevsky",
  yearPublished: 1866,
  genres: [
    "novel",
    "crime fiction",
    "politica fiction",
    "psychological fiction",
    "philosophical fiction",
    "mystery",
  ],

  setYearsPublished: function (year) {
    this.yearPublished = year;
  },

  getSummary: function () {
    return `${this.title} is written by ${this.author} in ${this.yearPublished}`;
  },
};

console.log(book.getSummary());

book.setYearsPublished(1867);

console.log(book.getSummary());
