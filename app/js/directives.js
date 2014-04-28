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

yLibraryDirectives.directive("showAddToQueueDialogButton", function() {
  return {
    restrict: "E",
    transclude: true,
    template: '<a ng-click="$root.addToQueueDialogShown = true;" class="btn btn-success"><i class="glyphicon glyphicon-shopping-cart"></i><span ng-transclude></span></a>'
  }
});

yLibraryDirectives.directive('modalDialog', function() {
  return {
    restrict: 'E',
    scope: {
      show: '='
    },
    replace: true,
    transclude: true,
    link: function($scope, $element, $attrs) {
      $scope.dialogStyle = {};
      if ($attrs.width) {
        $scope.dialogStyle.width = $attrs.width;
      }
      if ($attrs.height){
        $scope.dialogStyle.height = $attrs.height;
      }
      $scope.hideModal = function() {
        $scope.show = false;
      };
    },
    templateUrl: 'partials/modal-dialog.html'
  };
});

yLibraryDirectives.directive("addToQueueDialog", function() {
  return {
    restrict: "E",
    templateUrl: "partials/add-to-queue-dialog.html"
  }
});