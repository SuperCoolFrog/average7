import angular from 'angular';
import databaseService from '../core/database/database.service';
import InstallButton from '../install-button/install-button.component';

export const SETTINGS_FORM_MODULE_NAME = 'settingsForm';

export const settingsFormModule = angular.module(SETTINGS_FORM_MODULE_NAME, [
    databaseService,
    InstallButton,
]);

export default settingsFormModule;
