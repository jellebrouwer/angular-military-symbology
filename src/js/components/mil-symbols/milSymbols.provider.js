(function () {
    'use strict';

    angular.module('ngMilSymbols')
        .provider('milSymbol', milSymbol);

    function milSymbol($windowProvider) {

        return {
            setGlobals: setGlobals,
            $get: function () {
                return window.MS;
            }
        }

        function setGlobals() {
            var MS = $windowProvider.$get().MS;
            MS.setStandard('APP6');
        }

    }

    milSymbol.$inject = ['$windowProvider'];

})();