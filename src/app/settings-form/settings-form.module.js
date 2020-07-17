import angular from 'angular';
import databaseService from '../core/database/database.service';

export const SETTINGS_FORM_MODULE_NAME = 'settingsForm';

export const settingsFormModule = angular.module(SETTINGS_FORM_MODULE_NAME, [
    databaseService,
]);

export default settingsFormModule;
