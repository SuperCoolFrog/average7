import drawerModule, { DRAWER_MODULE_NAME } from './drawer.module';

const template = require('./drawer.template.html');

function drawerController() {}

drawerModule.component(DRAWER_MODULE_NAME, {
    template,
    controller: drawerController,
});

export default DRAWER_MODULE_NAME;