(function () {
  'use strict';

  /**
   * @name myApp.view1
   * @desc Controller and routes for View1 feature
   */
  angular
    .module('myApp.view1', ['ngRoute'])
    .config(routes)
    .controller('View1Ctrl', View1Ctrl);

  /**
   * @name routes
   * @desc Sets routes related to this module
   * @param $routeProvider Angular service which provides interface to setup routes
   */    
  function routes($routeProvider) {
    $routeProvider
      .when('/view1', {
        templateUrl: 'view1/view1.html',
        controller: 'View1Ctrl'
      });
  }

  function View1Ctrl() { }

})();