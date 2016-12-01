import * as angular from 'angular';
import { ngMilitarySymbology } from '../milSymbols.module';
let MS: any = require("milsymbol");

class MilSymbolController {
    sidc: string;
    symOptions: any;
}

function milSymbolDirective(): ng.IDirective {
    return {
        restrict: 'E',
        bindToController: {
            sidc: '@',
            symOptions: '='
        },
        controller: MilSymbolController,
        controllerAs: 'milSymbolCtrl',
        link: (scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes, ctrl: MilSymbolController) => {

            element.addClass('mil-symbol');

            scope.$watch(function () {
                return ctrl.sidc;
            }, function (newValue) {
                if (newValue) {
                    renderSymbol();
                }
            });

            scope.$watch(function () {
                return ctrl.symOptions;
            }, function (newValue) {
                if (newValue) {
                    // Set defaults;
                    ctrl.symOptions.size = ctrl.symOptions.size || 50;
                    renderSymbol();
                }
            }, true);

            function renderSymbol() {
                var currentSVG = angular.element(element).find('svg'),
                    symbol = new MS.symbol(ctrl.sidc, ctrl.symOptions).getMarker(),
                    symbolElement = symbol.asSVG();
                console.log(MS);

                if (currentSVG.length > 0) {
                    currentSVG.remove();
                }
                angular.element(element).append(symbolElement);
            }
        }
    };
}

ngMilitarySymbology.directive('milSymbol', milSymbolDirective);