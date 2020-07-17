import settingsFormModule, { SETTINGS_FORM_MODULE_NAME } from './settings-form.module';

const template = require('./settings-form.template.html');

const getUnit = (data) => {
    return (data && data.settings && data.settings.unit) || '';
}

function SettingsFormController(Database) {
    const data = Database.getData() || {};
    this.unit = getUnit(data);

    this.handleSaveClick = () => {
        let settings = data.settings || {};
        settings = Object.assign({}, settings, { unit: this.unit });
        const updatedData = Object.assign({}, data, {
            settings,
        });

        Database.saveData(updatedData);
    }

    this.handleDownloadClick = () => {
        Database.getDatabaseFile();
    };
}

SettingsFormController.$inject = ['Database'];

settingsFormModule.component(SETTINGS_FORM_MODULE_NAME, {
    template,
    controller: SettingsFormController,
});

export default SETTINGS_FORM_MODULE_NAME;