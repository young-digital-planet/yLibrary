var app = angular.module('app', ['ngAnimate']);

app.controller('books', function($scope,$http) {
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
