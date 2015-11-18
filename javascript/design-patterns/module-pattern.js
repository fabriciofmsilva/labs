(function(window, undefined) {

  // normally variables & functions start with a lowercase letter but with modules, that is not the case.
  // The general tradition is to start them with a capital letter instead.
  function MyModule() {

    // `this` refers to the instance of `MyModule` when created
    this.myMethod = function myMethod() {
      alert('my method');
    };

    // note that we still use a function declaration even when using a function expression.
    // for more information on why, check out: http://kangax.github.io/nfe/
    this.myOtherMethod = function myOtherMethod() {
      alert('my other method');
    };

  }

  // expose access to the constructor
  window.MyModule = MyModule;

})(window);

// example usage
var myModule = new MyModule();
myModule.myMethod(); // alerts "my method"
myModule.myOtherMethod(); // alerts "my other method"
