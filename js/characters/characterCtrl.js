angular.module('routing').controller('characterCtrl', function($scope, characterSrvc, characters) {
    console.log(characters);
    $scope.characters = characters;
    console.log($scope.characters);
});
