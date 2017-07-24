angular.module('routing').config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state("home", {
            url: "/",
            templateUrl: "../views/home.html",
            controller: "homeCtrl"
        })
        .state("characters", {
            url: "/characters",
            templateUrl: "../views/characters.html",
            controller: "characterCtrl",
                resolve: {
                    characters: function(characterSrvc) {
                        return characterSrvc.getCharacters().then(function(response) {
                            return response;
                        });
                    }
                }
        })
        .state("details", {
            url: "/character/:characterID",
            templateUrl: "../views/details.html",
            controller: "detailsCtrl"
        })
});
