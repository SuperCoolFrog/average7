import angular from 'angular';
import CogIcon from '../icons/cog-icon/cog-icon.component';

export const CONFIG_BUTTON_MODULE_NAME = 'configButton';

export const configButtonModule = angular.module(CONFIG_BUTTON_MODULE_NAME, [
    CogIcon,
]);

export default configButtonModule;