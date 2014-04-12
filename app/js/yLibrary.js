var app = angular.module('app', ['ngRoute', 'ngAnimate', 'yLibraryControllers', 'yLibraryDirectives']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
        when('/books', {
          templateUrl: 'partials/books-list.html',
          controller: 'BooksListController'
        }).
        when('/book/:isbn', {
          templateUrl: 'partials/book-details.html',
          controller: 'BookDetailsController'
        }).
        when('/queue/:isbn', {
          templateUrl: 'partials/book-queued.html',
          controller: 'BookQueuedController'
        }).
        otherwise({
          redirectTo: '/books'
        });
  }]);