(function () {
    'use strict';

    angular.module('ngMilSymbols')
        .directive('milSymbol', milSymbol);

    function milSymbol() {

        return {
            restrict: 'E',
            scope: {
                sidc: '@',
                symOptions: '='
            },
            link: link,
            controller: 'MilSymbolController'
        };

        function link(scope, element, attrs) {

            // console.log(scope.sidc, scope.symOptions);

            scope.$watch('sidc', function (newValue) {
                if (newValue) {
                    renderSymbol()
                }
            });

            scope.$watch('symOptions', function (newValue) {
                if (newValue) {
                    renderSymbol()
                }
            }, true);

            function renderSymbol() {
                var currentSVG = angular.element(element).find('svg'),
                    SVG = new MS.symbol(scope.sidc, scope.symOptions).getMarker().asSVG();
                if (currentSVG.length > 0) {
                    currentSVG.remove();
                }
                angular.element(element).append(SVG);
            }



        }
    }

})();