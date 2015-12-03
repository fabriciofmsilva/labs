function Book(params) {
  this.title = params.title;
  this.price = params.price;
}

Book.prototype.setStrategy = function(company) {
  this.company = company;
};

Book.prototype.calculate = function() {
  return this.company.calculate(this.price);
};

function UPS() {
    this.calculate = function(price) {
        return parseFloat((price * 1.15).toFixed(2));
    }
}

function USPS() {
    this.calculate = function(price) {
        return parseFloat((price * 1.125).toFixed(2));
    }
}

function Fedex() {
    this.calculate = function(price) {
        return parseFloat((price * 1.1).toFixed(2));
    }
}

var book = new Book({title: 'Book', price: 69.9});

book.setStrategy(new UPS());
console.log(book.calculate());
book.setStrategy(new USPS());
console.log(book.calculate());
book.setStrategy(new Fedex());
console.log(book.calculate());
