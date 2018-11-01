module.exports = function(config) {
    config.set({
      basePath: '',
      frameworks: ['jasmine'],
  
  
      // list of files / patterns to load in the browser
      files: [
        'node_modules/angular/angular.js',
        'node_modules/angular-animate/angular-animate.js',
        'node_modules/angular-mocks/angular-mocks.js',
        'node_modules/angular-ui-router/release/angular-ui-router.js',
        'node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js',
        'build/app.js',
        'test/*.*',
      ],
  
      exclude: [],
  

      preprocessors: {
        // 'dev/scripts/directives/loading-modal/loading-modal.html': 'ng-html2js'
      },
      reporters: ['progress'],
      port: 9876,
      colors: true,
      logLevel: config.LOG_INFO,
      autoWatch: false,
      browsers: ['PhantomJS'],
      singleRun: true,
      concurrency: Infinity
    });
  };