angular.module('routing').controller('detailsCtrl', function($scope, $stateParams, detailsSrvc) {
    $scope.getChar = function(charId) {
        detailsSrvc.getChar(charId).then(function(response) {
            $scope.character = response;
        });
    };
    $scope.getChar($stateParams.character.id);
});
