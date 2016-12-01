import { module } from 'angular';

export let ngMilitarySymbology = module('ngMilitarySymbology', []);

// Components
import './symbol-options/dimensions.constant';
import './symbol-options/symbolOptions.component';

import './mil-symbols/milSymbols.directive';
import './mil-symbols/milSymbols.provider';