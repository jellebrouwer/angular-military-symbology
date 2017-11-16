import * as angular from 'angular';
import { MilSymbolProvider } from './components/mil-symbols/milSymbols.provider';

export const app = angular.module('symbols', ['ngMilitarySymbology']);

app.config(configFn);
function configFn(milSymbolProvider: MilSymbolProvider) {

  milSymbolProvider.setGlobals({
    setStandard: ['APP6']
  });

}
configFn.$inject = ['MSProvider'];

import './components/symbol-options/dimensions.constant';
import './components/symbol-options/symbolOptions.component';