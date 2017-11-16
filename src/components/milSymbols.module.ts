import * as angular from 'angular';

export const ngMilitarySymbology = angular.module('ngMilitarySymbology', []);

// Components
import './mil-symbols/milSymbols.directive';
import './mil-symbols/milSymbols.provider';