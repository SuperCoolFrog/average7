import angular from 'angular';
import angularRoute from 'angular-route';
import applyConfig from './app.config';

import '../style/app.css';

import CalculatorTable from './calculator-table/calculator-table.component';
import ArchiveButton from './archive-button/archive-button.component';
import NewItemButton from './new-item-button/new-item-button.component';
import ConfigButton from './config-button/config-button.component';
import NewItemForm from './new-item-form/new-item-form.component';
import SettingsForm from './settings-form/settings-form.component';

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

const appModule = angular
  .module(MODULE_NAME, [
    'ngRoute',
    CalculatorTable,
    ArchiveButton,
    NewItemButton,
    ConfigButton,
    NewItemForm,
    SettingsForm,
  ])
  .directive('app', app)
  .controller('AppCtrl', AppCtrl);

applyConfig(appModule);

export default MODULE_NAME;