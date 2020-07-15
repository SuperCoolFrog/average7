import angular from 'angular';
import PlusIcon from '../icons/plus-icon/plus-icon.component';

export const NEW_ITEM_BUTTON_MODULE_NAME = 'newItemButton';

export const newItemButtonModule = angular.module(NEW_ITEM_BUTTON_MODULE_NAME, [
    PlusIcon,
]);

export default newItemButtonModule;