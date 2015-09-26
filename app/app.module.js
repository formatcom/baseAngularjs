(function(){

   'use strict';

   var _APP = 'core';

   var _API = 'http://api.formatcom.com/';

   var _SERVICES = [
   ];

   var _CONTROLLERS = [
   ];

   var _DIRECTIVES = [
   ];

   var _THIRD_PARTY_APPS = [
      'ngMaterial',
      'LocalStorageModule',
      'templates'
   ]; 


   var _DEPENDENCIES = _SERVICES.concat(_CONTROLLERS); 
   
   _DEPENDENCIES = _DEPENDENCIES.concat(_DIRECTIVES);
   _DEPENDENCIES = _DEPENDENCIES.concat(_THIRD_PARTY_APPS);
   _DEPENDENCIES = _DEPENDENCIES.concat(['routes']);


   angular.module(_APP, _DEPENDENCIES).constant('api', {url: _API})

   .controller('Controller', ['$scope', function ($scope) {
      $scope.loading = true;
   }]);

})();
