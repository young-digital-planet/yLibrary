var yLibraryDirectives = angular.module("yLibraryDirectives", []);

yLibraryDirectives.directive("commaSeparatedList", function() {
  return {
    restrict: "E",
    scope: { list: '=' },
    template: "<span ng-repeat='element in list'>{{element}}{{!$last ? ', ' : ''}}</span>"
  }
});

yLibraryDirectives.directive("queue", function() {
  return {
    restrict: "E",
    scope: { queueList: '=' },
    templateUrl: "partials/queue.html"
  }
});