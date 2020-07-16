import angular from 'angular';
import DatabaseService from './DatabaseService';

export const DATABASE_SERVICE_MODULE_NAME = 'core.database';

angular
    .module(DATABASE_SERVICE_MODULE_NAME, [])
    .factory('Database', function() {
        return  new DatabaseService();
    });

export default DATABASE_SERVICE_MODULE_NAME;