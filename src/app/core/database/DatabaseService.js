import { fileCreator } from './helpers';

/***
 *  // Data Structure
 * 
 * {
 *      [user]: {
 *          records: [...],
 *          settings: {
 *              unit: '',
 *              databaseFilename: ''
 *          },
 *          updated: [date]
 *      }
 * }
 * 
 */

const LOCAL_STORAGE_KEY = 'average7Data';
const FILE_TYPE = 'json';
const FILE_NAME = 'average7.database.json';

class DatabaseService {

    constructor() {
        this.hasLoadedData = false;
        this.data = null;
    }

    _loadFromLocalStorage() {
        const dataJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
        this.data = dataJSON ? JSON.parse(dataJSON) : null;
        this.hasLoadedData = true;
        return this.data;
    }

    _loadDataFromFile() {

    }

    _saveToDataLocalStorage() {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(this.data));
    }

    getDatabaseFile() {
        fileCreator(JSON.stringify(this.data), FILE_NAME, FILE_TYPE);
    }

    setDataFromDatabaseFile(filename) {

    }

    getData() {
        if (this.hasLoadedData) {
            return this.data;
        }

        return this._loadFromLocalStorage();
    }

    saveData(data) {
        this.data = data;
        this._saveToDataLocalStorage();
    }
}

export default DatabaseService;