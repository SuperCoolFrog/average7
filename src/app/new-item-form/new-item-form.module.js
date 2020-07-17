import angular from 'angular';
import databaseService from '../core/database/database.service';

export const NEW_ITEM_FORM_MODULE_NAME = 'newItemForm';

export const newItemFormModule = angular.module(NEW_ITEM_FORM_MODULE_NAME, [
    databaseService,
]);

export default newItemFormModule;