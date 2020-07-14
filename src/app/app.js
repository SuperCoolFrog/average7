import angular from 'angular';
import '../style/app.css';

import CalculatorTable from './calculator-table/calculator-table.component';
import ArchiveButton from './archive-button/archive-button.component';

const MODULE_NAME = 'app';

let app = () => {
  return {
    template: require('./app.template.html'),
    controller: 'AppCtrl',
    controllerAs: MODULE_NAME,
  }
};

class AppCtrl {
  constructor() {
    this.isOpen = false;
  }
}

angular
  .module(MODULE_NAME, [
    CalculatorTable,
    ArchiveButton,
  ])
  .directive('app', app)
  .controller('AppCtrl', AppCtrl);

export default MODULE_NAME;