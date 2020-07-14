import angular from 'angular';
import BarsIcon from '../icons/bars-icon/bars-icon.components';

export const NAV_BUTTON_MODULE_NAME = 'navButton';

export const navButtonModule = angular.module(NAV_BUTTON_MODULE_NAME, [
    BarsIcon,
]);

export default navButtonModule;