var dailyVersesServices = angular.module('dailyVersesServices', ['ngResource']);

dailyVersesServices.factory('Verses', ['$resource', 
  function ($resource) {
    $resource('/verses/june_2015.json', function (verses) {
      console.dir(verses);
      return verses;
    });
}]);


