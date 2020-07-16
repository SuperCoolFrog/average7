import angular from 'angular';
import databaseService from './database/database.service';

export const CORE_MODULE_NAME = 'core';

export const coreModule = angular.module(CORE_MODULE_NAME, [
    databaseService,
]);

export default CORE_MODULE_NAME;