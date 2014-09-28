(function () {
  'use strict';

  /**
   * @name myApp
   * @desc App level routes and dependencies.
   */
  angular
    .module('myApp', [
      'ngRoute',
      'myApp.view1',
      'myApp.view2'
    ])
    .config(routes);

  /**
   * @name routes
   * @desc Sets routes related to this module
   * @param $routeProvider Angular service which provides interface to setup routes
   */  
  function routes($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/view1'});
  }

})();