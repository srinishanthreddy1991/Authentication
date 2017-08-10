(function () {
    "use strict";
    angular
        .module("myModule", ["auth0", "angular-storage", "angular-jwt", "ngMaterial", "ui-router"])
        .config(
            function ($provide, authProvider, ngRout, $stateProvider, $httpProvider, jwtInterceptorProvider) {

                $urlRouterProvider.otherwise("/Home");

                $stateProvider
                    .state("home",{
                        url: "/home",
                        templateUrl: "Components/Home/home.tmpl.html",
                    })
                    .state("profile",{
                        url: "/profile",
                        templateUrl: "Components/Profil/profile.tmpl.html",
                        controller: "ProfileController as user",
                    })
            }
        )
})();