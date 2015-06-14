'use static'

app.controller('MainController', ['$scope', function($scope) {
  $scope.title = 'Here are some verses';

  $scope.day_of_month = moment().format('Do');
  $scope.month_name = moment().format('MMMM');



}]);

