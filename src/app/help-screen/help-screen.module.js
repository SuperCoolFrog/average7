import angular from 'angular';
import ArchiveIcon from '../icons/archive-icon/archive-icon.component';
import PlusIcon from '../icons/plus-icon/plus-icon.component';
import CogIcon from '../icons/cog-icon/cog-icon.component';

export const HELP_SCREEN_MODULE_NAME = 'helpScreen';

export const helpScreenModule = angular.module(HELP_SCREEN_MODULE_NAME, [
    ArchiveIcon,
    PlusIcon,
    CogIcon,
]);

export default helpScreenModule;
