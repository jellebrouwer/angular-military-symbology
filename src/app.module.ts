import './sass/main.scss';
import { module } from 'angular';
import { MilSymbolProvider } from './components/mil-symbols/milSymbols.provider';

let app = module('symbols', ['ngMilitarySymbology'])

app.config(configFn);
function configFn(milSymbolProvider: MilSymbolProvider) {

    milSymbolProvider.setGlobals({
        setStandard: ['APP6']
    });

}
configFn.$inject = ['MSProvider'];

import './components/milSymbols.module';