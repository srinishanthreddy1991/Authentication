(function () {
    "use strict"
    angular
        .module("myModule")
        .directive("Toolbar", toolbarFunc);
    
    function toolbarFunc() {
        var toolVm = this;
        return{
            templateUrl: "Components/Toolbar/toolbar.tmpl.html",
            controller: ToolbarController,
            controllerAs: "toolbar",
        }
    }
})();