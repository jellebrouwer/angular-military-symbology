import * as angular from 'angular';
import { Symbol, SymbolOptions } from 'milsymbol';
import { ngMilitarySymbology } from '../milSymbols.module';

class MilSymbolController {
    sidc: string;
    symOptions: SymbolOptions;
}

function milSymbolDirective(): ng.IDirective {
    return {
        restrict: 'E',
        bindToController: {
            sidc: '@',
            symOptions: '<'
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
                } else {
                    removeElement(getSVGs());
                }
            });

            scope.$watch(function () {
                return ctrl.symOptions;
            }, function (newValue) {
                if (newValue) {
                    ctrl.symOptions.size = ctrl.symOptions.size || 50;
                    renderSymbol();
                }
            }, true);

            function renderSymbol() {
                if (ctrl.sidc) {
                    const symbol = new Symbol(ctrl.sidc, ctrl.symOptions);
                    const symbolElement = symbol.asSVG();

                    if (getSVGs().length > 0) {
                        removeElement(getSVGs());
                    }

                    angular.element(element).append(symbolElement);
                }

            }

            function removeElement(el) {
                el.remove();
            }

            function getSVGs() {
                return angular.element(element).find('svg');
            }
        }
    };
}

ngMilitarySymbology.directive('milSymbol', milSymbolDirective);