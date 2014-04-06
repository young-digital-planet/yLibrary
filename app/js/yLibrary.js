var app = angular.module('app', ['ngRoute', 'ngAnimate']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
        when('/books', {
          templateUrl: 'partials/books-list.html',
          controller: 'BooksController'
        }).
        when('/book/:isbn', {
          templateUrl: 'partials/book-details.html',
          controller: 'BooksController'
        }).
        otherwise({
          redirectTo: '/books'
        });
  }]);

app.controller('BooksController', function($scope,$http) {
	$scope.message = 'World';
	$scope.booksQueue = null;

	$scope.queue = function() {
		console.log('Queue');
		$http({method: 'GET', url: '/rest/queue'}).
				success(function(data, status, headers, config) {
					$scope.booksQueue = data;
					console.log('Recived books queue');
				}).
				error(function(data, status, headers, config) {
					console.log('Error: ' + status)
				});


	};

  $scope.queue();
});
