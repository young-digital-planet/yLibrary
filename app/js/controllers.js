var yLibraryControllers = angular.module('yLibraryControllers', []);

yLibraryControllers.controller('BooksListController', function($scope,$http) {
  $scope.booksQueue = null;

  $scope.queue = function() {
    $http({method: 'GET', url: '/rest/queue'}).
        success(function(data, status, headers, config) {
          $scope.booksQueue = data;
        }).
        error(function(data, status, headers, config) {
          console.log('Error: ' + status)
        });
  };

  $scope.queue();
});

yLibraryControllers.controller('BookDetailsController', function($scope,$routeParams,$http) {
  $scope.book = null;

  $http({method: 'GET', url: '/rest/queue/' + $routeParams.isbn}).
      success(function(data, status, headers, config) {
        $scope.bookQueue = data;
      }).
      error(function(data, status, headers, config) {
        console.log('Error: ' + status)
      });
});

yLibraryControllers.controller('BookQueuedController', function($scope,$routeParams,$http,$location) {

  $scope.booksQueue = null;

  if ($scope.username && $scope.username.length > 0) {
    $http({method: 'POST', url: '/rest/queue/' + $routeParams.isbn, data: {username: $scope.username}}).
        success(function (data, status, headers, config) {
          data.queue.splice(data.queue.length - 1, 1);
          $scope.bookQueue = data;
          $scope.bookQueue.userIsTheOnlyOneInQueue = data.queue.length == 0;
          console.log($scope.bookQueue.userIsTheOnlyOneInQueue);
        }).
        error(function (data, status, headers, config) {
          console.log('Error: ' + status)
        });
  }
  else
  {
    $location.path("/book/" + $routeParams.isbn);
  }
});
