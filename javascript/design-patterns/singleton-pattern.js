var mySingleton = (function(window, undefined) {

  var instance = null;

  // revealing module pattern that handles initialization of our new module
  function initializeNewModule() {

    function myMethod() {
      alert('my method');
    }

    function myOtherMethod() {
      alert('my other method');
    }

    return {
      someMethod: myMethod,
      someOtherMethod: myOtherMethod,
    };

  }

  // handles the prevention of additional instantiations
  function getInstance() {
    if(!instance) {
      instance = new initializeNewModule();
    }
    return instance;
  }

  return {
    getInstance: getInstance,
  };

})(window);

// example usage
mySingleton.getInstance().someMethod(); // alerts "my method"
mySingleton.getInstance().someOtherMethod(); // alerts "my other method"
