/***********************************************
***  Methods for the use case updateBook  ******
************************************************/
pl.view.updateBook = {
  setupUserInterface: function() {
    var formEl = document.forms['Book'];
    var saveButton = formEl.commit;
    var selectBookEl = formEl.selectBook;
    var key = '';
    var keys = [];
    var book = null;
    var optionEl = null;
    // load all book objects
    Book.loadAll();
    // populate the selection list with books
    keys = Object.keys(Book.instances);
    for(var i = 0; i < keys.length; i++) {
      key = keys[i];
      book = Book.instances[key];
      optionEl = document.createElement('option');
      optionEl.text = book.title;
      optionEl.value = book.isbn;
      selectBookEl.add(optionEl, null);
    }
    // when a book is selected, populate the form with the book data
    selectBookEl.addEventListener('change', function() {
      var book = null;
      var key = selectBookEl.value;
      if (key) {
        book = Book.instances[key];
        formEl.isbn.value = book.isbn;
        formEl.title.value = book.title;
        formEl.year.value = book.year;
      } else {
        formEl.reset();
      }
    });
    saveButton.addEventListener('click',
                                pl.view.updateBook.handleUpdateClickEvent);
    window.addEventListener('beforeunload', function() {
      Book.saveAll();
    });
  },
  // save session data
  handleUpdateClickEvent: function() {
    var formEl = document.forms['Book'];
    var slots = {
      isbn: formEl.isbn.value,
      title: formEl.title.value,
      year: formEl.year.value,
    };
    Book.update(slots);
    formEl.reset();
  },
};
