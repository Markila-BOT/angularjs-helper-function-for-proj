app.directive("limitTo", [function() {
    return {
        restrict: "A",
        link: function(scope, elem, attrs) {
            var limit = parseInt(attrs.limitTo);
            angular.element(elem).on("keypress", function(e) {
                if (this.value.length == limit) e.preventDefault();
            });
        }
    }
}]);

<input limit-to="4" type="number" class="form-control input-lg" ng-model="search.main" placeholder="enter first 4 digits: 09XX">
