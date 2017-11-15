import * as ms from 'milsymbol';
import { ngMilitarySymbology } from '../milSymbols.module';

export class MilSymbolProvider implements ng.IServiceProvider {

    public setGlobals(globals) {
        if (this.isValid(globals)) {
            Object.keys(globals).forEach(function (method) {
                ms[method].apply(ms, globals[method]);
            });
        } else {
            console.warn('MSProvider.setGlobals expects an Object');
        }

    }

    public $get() {
        return ms;
    }

    private isValid(obj) {
        return !!obj && Object.keys(obj).length > 0 && obj.constructor === Object;
    }

}

ngMilitarySymbology.provider('MS', MilSymbolProvider);