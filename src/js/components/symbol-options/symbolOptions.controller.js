(function () {
    'use strict';

    angular.module('ngMilSymbols')
        .controller('SymbolOptionsController', SymbolOptionsController);

    function SymbolOptionsController() {
        var vm = this;
        vm.sidcs = [
            'sfgpewrh--mt',
            'SFG-UCI----D'
        ];
        vm.options = {
            size: 20
        };
    }

})();