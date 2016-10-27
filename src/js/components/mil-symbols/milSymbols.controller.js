(function () {
    'use strict';

    angular.module('ngMilSymbols')
        .controller('MilSymbolController', MilSymbolController);

    function MilSymbolController(milSymbol) {
        console.log(milSymbol);

    }

    MilSymbolController.$inject = ['milSymbol'];

})();