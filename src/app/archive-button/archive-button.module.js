import angular from 'angular';
import ArchiveIcon from '../icons/archive-icon/archive-icon.component';

export const ARCHIVE_BUTTON_MODULE_NAME = 'archiveButton';

export const archiveButtonModule = angular.module(ARCHIVE_BUTTON_MODULE_NAME, [
    ArchiveIcon,
]);

export default archiveButtonModule;