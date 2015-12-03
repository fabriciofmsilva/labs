function Book(params) {
  this.id = params.id;
  this.isbn = params.isbn;
  this.title = params.title;
  this.author = params.author;
  this.year = params.year;
  this.chapters = params.chapters;
}

function BookBuilder() {
  this.params = {}
}

BookBuilder.id = 0;

BookBuilder.prototype.addIsbn = function(isbn) {
  this.params.isbn = isbn;
  console.log(this);
  return this;
};

BookBuilder.prototype.addTitle = function(title) {
  this.params.title = title;
  return this;
};

BookBuilder.prototype.addAuthor = function(author) {
  this.params.author = author;
  return this;
};

BookBuilder.prototype.addYear = function(year) {
  this.params.year = year;
  return this;
};

BookBuilder.prototype.addChapter = function(chapter, chapterTitle) {
  this.params.chapters = this.params.chapters || {};
  this.params.chapters[chapter] = chapterTitle;
  return this;
};

BookBuilder.prototype.construct = function() {
  this.params.id = BookBuilder.id++;
  return new Book(this.params);
};


var book = new BookBuilder().addIsbn('006251587X')
           .addTitle('Weaving the Web')
           .addAuthor('John Doe')
           .addYear('2000')
           .addChapter(0, 'Preface')
           .addChapter(1, 'Introduction')
           .construct();

var book2 = new BookBuilder().addIsbn('006251587X')
           .addTitle('Weaving the Web')
           .addAuthor('Marie Doe')
           .addYear('2012')
           .addChapter(0, 'Preface')
           .addChapter(1, 'Introduction')
           .construct();
