'use strict';

var dailyVersesControllers = angular.module('dailyVersesControllers', [])

dailyVersesControllers.controller('MainController', ['$scope', '$http', 'Verses', function($scope, $http, Verses) {
  $scope.title = 'Here are some verses';

  $scope.day_of_month = moment().format('Do');
  $scope.month_name = moment().format('MMMM');

  var all_verses = Verses.query();
  console.dir(all_verses);

  todaysVerses(all_verses, function (e, todays_data) {
    $scope.todays_verses = todays_data;
  });
}]);

var todaysVerses = function (data, callback) {
  var verses_data = _.find(data, {day: moment().date()});
  var todays_data = [
    {
      title: 'Gospels',
      verse: verses_data.newt1,
      niv_link: getBibleLink('niv', verses_data.newt1, 0),
      niv_audio: getBibleLink('niv', verses_data.newt1, 1)
    },
    {
      title: 'Psalms',
      verse: verses_data.ps,
      niv_link: getBibleLink('niv', verses_data.ps, 0),
      niv_audio: getBibleLink('niv', verses_data.ps, 1)
    },
    {
      title: 'New Testament',
      verse: verses_data.newt2,
      niv_link: getBibleLink('niv', verses_data.newt2, 0),
      niv_audio: getBibleLink('niv', verses_data.newt2, 1)
    },
    {
      title: 'Old Testament',
      verse: verses_data.oldt,
      niv_link: getBibleLink('niv', verses_data.oldt, 0),
      niv_audio: getBibleLink('niv', verses_data.oldt, 1)
    }
  ];
  callback(null, todays_data);
}

var getBibleLink = function (version, verse, audio) {
  var url = '';
  if (audio) 
    url = 'https://www.biblegateway.com/audio/mclean/niv/' + verse.replace(' ','.');
  else 
    url = 'https://www.biblegateway.com/passage/?search=' + encodeURIComponent(verse);
  
  return url
}