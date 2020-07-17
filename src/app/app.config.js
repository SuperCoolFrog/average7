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
                    template: '<new-item-form></new-item-form>'
                }).
                when('/settings', {
                    template: '<settings-form></settings-form>'
                }).
                when('/help-screen', {
                    template: '<help-screen></help-screen>'
                }).
                otherwise('/help-screen');
            }
        ]);
};

export default applyConfig; 
