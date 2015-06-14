'use static'

app.controller('MainController', ['$scope', '$http', function($scope, $http) {
  $scope.title = 'Here are some verses';

  $scope.day_of_month = moment().format('Do');
  $scope.month_name = moment().format('MMMM');

  $http.get('/verses/june_2015.json').success(function (data, status, headers, config) {
    $scope.verses = data;
    $scope.todays_verses = _.find(data, {day: moment().date()});
  });

}]);

