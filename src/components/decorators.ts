import * as angular from 'angular';

export const Component = function (options: ng.IComponentOptions): Function {
    return (controller: Function) => {
        return angular.extend(options, { controller });
    };
};