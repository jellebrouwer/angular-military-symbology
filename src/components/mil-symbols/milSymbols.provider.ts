import { ngMilitarySymbology } from '../milSymbols.module';
let MS: any = require("milsymbol");

export class MilSymbolProvider implements ng.IServiceProvider {

    public setGlobals(globals) {
        if (this.isValid(globals)) {
            Object.keys(globals).forEach(function (method) {
                MS[method].apply(MS, globals[method]);
            });
        } else {
            console.warn('MSProvider.setGlobals expects an Object');
        }

    }

    public $get() {
        return MS;
    }

    private isValid(obj) {
        return !!obj && Object.keys(obj).length > 0 && obj.constructor === Object;
    }

}

ngMilitarySymbology.provider('MS', MilSymbolProvider);