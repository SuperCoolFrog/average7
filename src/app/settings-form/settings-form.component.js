import settingsFormModule, { SETTINGS_FORM_MODULE_NAME } from './settings-form.module';

const template = require('./settings-form.template.html');

function SettingsFormController() {}

settingsFormModule.component(SETTINGS_FORM_MODULE_NAME, {
    template,
    controller: SettingsFormController,
});

export default SETTINGS_FORM_MODULE_NAME;