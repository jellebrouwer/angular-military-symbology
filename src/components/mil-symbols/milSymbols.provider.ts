import { ngMilitarySymbology } from '../milSymbols.module';
let MS: any = require("milsymbol");

export class MilSymbolProvider implements ng.IServiceProvider {

    public setGlobals(globals) {
        Object.keys(globals).forEach(function (method) {
            MS[method].apply(MS, globals[method]);
        });
    }

    public $get() {
        return MS;
    }
}

ngMilitarySymbology.provider('MS', MilSymbolProvider);