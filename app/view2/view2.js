(function () {
  'use strict';

  /**
   * @name myApp.view2
   * @desc Controller and routes for View2 feature
   */
  angular
    .module('myApp.view2', ['ngRoute'])
    .config(routes)
    .controller('View2Ctrl', View2Ctrl);

  /**
   * @name routes
   * @desc Sets routes related to this module
   * @param $routeProvider Angular service which provides interface to setup routes
   */    
  function routes($routeProvider) {
    $routeProvider
      .when('/view2', {
        templateUrl: 'view2/view2.html',
        controller: 'View2Ctrl'
      });
  }

  function View2Ctrl() { }

})();