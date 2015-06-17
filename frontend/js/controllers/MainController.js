'use static'

app.controller('MainController', ['$scope', '$http', function($scope, $http) {
  $scope.title = 'Here are some verses';

  $scope.day_of_month = moment().format('Do');
  $scope.month_name = moment().format('MMMM');

  $http.get('/verses/june_2015.json').success(function (data, status, headers, config) {
    todaysVerses(data, function (e, todays_data) {
      $scope.todays_verses = todays_data;
    });
  });
}]);

var todaysVerses = function (data, callback) {
  verses_data = _.find(data, {day: moment().date()});
  todays_data = {
    newt1: {
      verse: verses_data.newt1,
      niv_link: getBibleLink('niv', verses_data.newt1)
    },
    ps: {
      verse: verses_data.ps,
      niv_link: getBibleLink('niv', verses_data.ps)
    },
    newt2: {
      verse: verses_data.newt2,
      niv_link: getBibleLink('niv', verses_data.newt2)
    },
    oldt: {
      verse: verses_data.oldt,
      niv_link: getBibleLink('niv', verses_data.oldt)
    }
  };
  callback(null, todays_data);
}

var getBibleLink = function (version, verse) {
  var url = 'https://www.biblegateway.com/passage/?search=' + encodeURIComponent(verse) ;
  return url
}