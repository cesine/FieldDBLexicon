(function() {
  'use strict';

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

  }

  angular
    .module('fielddbLexiconAngularApp')
    .config(config)
    .config(function($locationProvider) {
      $locationProvider.html5Mode({
        enabled: false,
        requireBase: false
      });
     });

})();