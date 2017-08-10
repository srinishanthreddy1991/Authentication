(function () {
    "use strict";
    angular
        .module("myModule")
        .controller("ProfileController", profileCtrlFunc);

    profileCtrlFunc.$inject = ["$http"]
    
    function profileCtrlFunc($http) {
        //vm = view-model
        var profileVm = this;

        profileVm.message = "Hello!";
    }
})();