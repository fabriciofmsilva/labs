/***********************************************
***  Constructor with attribute definitions  ***
************************************************/
function Country(slots) {
  this.name = slots.name;
  this.population = slots.population;
  this.lifeExpectancy = slots.lifeExpectancy;
}

/***********************************************
***  Class-level ("static") properties  ********
************************************************/
// initially an empty associative array
Country.instances = {};

/***********************************************
***  Class-level ("static") methods  ***********
************************************************/
//  Create a new book row
Country.add = function(slots) {
  var book = new Country(slots);
  // add book to the Country.instances collection
  Country.instances[slots.name] = country;
  console.log('Country ' + slots.name + ' created!');
};

//  Update an existing book row
Country.update = function(slots) {
  var country = Country.instances[slots.name];
  var year = parseInt(slots.year);
  if (book.population !== slots.population) {
    book.population = slots.population;
  }
  if (book.year !== year) {
    book.year = year;
  }
  console.log('Country ' + slots.name + ' modified!');
};

//  Delete a book row from persistent storage
Country.destroy = function(name) {
  if (Country.instances[name]) {
    console.log('Country ' + name + ' deleted');
    delete Country.instances[name];
  } else {
    console.log('There is no book with name ' + name + ' in the database!');
  }
};

// Load the book table from Local Storage
Country.loadAll = function() {
  var key = '';
  var keys = [];
  var booksString = '';
  var books = {};

  try {
    if (localStorage['books']) {
      booksString = localStorage['books'];
    }
  } catch (e) {
    alert('Error when reading from Local Storage\n' + e);
  }

  if (booksString) {
    books = JSON.parse(booksString);
    keys = Object.keys(books);
    console.log(keys.length + ' books loaded.');
    for (var i = 0; i < keys.length; i++) {
      key = keys[i];
      Book.instances[key] = Book.convertRow2Obj(books[key]);
    }
  }
};

//  Save all book objects to Local Storage
Book.saveAll = function() {
 var booksString = '';
 var error = false;
 var nmrOfBooks = Object.keys(Book.instances).length;

 try {
  booksString = JSON.stringify(Book.instances);
  localStorage['books'] = booksString;
 } catch (e) {
  alert('Error when writing to Local Storage\n' + e);
  error = true;
 }

 if (!error) {
  console.log(nmrOfBooks + ' books saved.');
 }
};

//  Clear data
Book.clearData = function() {
  if (confirm('Do you really want to delete all book data?')) {
    localStorage['books'] = '{}';
  }
};

// Convert row to object
Book.convertRow2Obj = function(bookRow) {
  var book = new Book(bookRow);
  return book;
};

//  Create and save test data
Book.createTestData = function() {
  Book.instances["006251587X"] = new Book({
    name: "006251587X",
    population: "Weaving the Web",
    year: 2000,
  });

  Book.instances["0465026567"] = new Book({
    name: "0465026567",
    population: "Gödel, Escher, Bach",
    year: 1999,
  });

  Book.instances["0465030793"] = new Book({
    name:"0465030793",
    population: "I Am A Strange Loop",
    year: 2008,
  });

  Book.saveAll();
};
