// Karma config

module.exports = function(config) {
  config.set({
    // base path that will be used to resolve files and exclude
    basePath: '',

    // testing framework to use (jasmise/mocha/qunit/...)
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      '../libs/angular.min.js',
      '../libs/angular-mocks.js',
      'controller.js',
      'simpleSpec.js',
      'controllerSpec.js',
    ],

    // list of files / patterns to esclude
    esclude: [],

    // web server port
    port: 8080,

    // level of logging
    // possible / values: LOG_DISABEL || LOG_ERROR ||
    //                    LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and execute tests
    // whenever any file changes
    autoWatch: true,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['Chrome'],

    // Continuous Integration mode
    // id true, it captures browsers, runs tests, and exits
    singleRun: false,
  });
};
