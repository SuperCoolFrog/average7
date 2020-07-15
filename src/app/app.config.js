import angular from 'angular';
import appModule from './app';

const applyConfig = (module) => {
    module.config(['$routeProvider',
        function config($routeProvider) {
            $routeProvider.
                when('/average', {
                    template: '<calculator-table></calculator-table>'
                }).
                when('/new', {
                    template: '<div>NEW</div>'
                }).
                when('/config', {
                    template: '<div>CONFIG</div>'
                }).
                otherwise('/average');
            }
        ]);
};

export default applyConfig; 
