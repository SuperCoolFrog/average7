import angular from 'angular';
import '../style/app.css';

import  CalculatorTable from './calculator-table/calculator-table.component';
import  BarsIcon from './icons/bars-icon/bars-icon.components';

const MODULE_NAME = 'app';

let app = () => {
  return {
    template: require('./app.template.html'),
    controller: 'AppCtrl',
    controllerAs: MODULE_NAME,
  }
};

class AppCtrl {}

angular
  .module(MODULE_NAME, [
    CalculatorTable,
    BarsIcon,
  ])
  .directive('app', app)
  .controller('AppCtrl', AppCtrl);

export default MODULE_NAME;