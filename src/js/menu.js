import DeviceTest from './selftest/devicetest';
import DeviceSettings from './board/settings';

export default class Menu {
    constructor() {
        this.test = new DeviceTest();
        var menu = new nw.Menu({ type: 'menubar' });

        // Create a submenu as the 2nd level menu
        var appmenu = new nw.Menu();
        appmenu.append(new nw.MenuItem({ label: 'Preferences' }));
        appmenu.append(new nw.MenuItem({
            label: 'Exit', click: () => {

            }
        }));

        var devicemenu = new nw.Menu();
        devicemenu.append(new nw.MenuItem({
            label: 'Test mode', click: () => {
                this.test.enterTestMode();
            }
        }));
        devicemenu.append(new nw.MenuItem({
            label: 'Start Routine', click: () => {
                this.test.startRoutine();
            }
        }));
        devicemenu.append(new nw.MenuItem({
            label: 'Stop Routine', click: () => {
                this.test.stopRoutine();
            }
        }));
        var editmenu = new nw.Menu();
        editmenu.append(new nw.MenuItem({
            label: 'Device settings', click: () => {
                DeviceSettings.loadPage();
            }
        }));
        editmenu.append(new nw.MenuItem({
            label: 'File patterns', click: () => {
                DeviceSettings.loadPatternsPage();
            }
        }));
        editmenu.append(new nw.MenuItem({
            label: 'Device status', click: () => {
                DeviceSettings.exit();
            }
        }));
        // Create and append the 1st level menu to the menubar
        menu.append(new nw.MenuItem({
            label: 'Application',
            submenu: appmenu
        }));
        menu.append(new nw.MenuItem({
            label: 'View',
            submenu: editmenu
        }));
        menu.append(new nw.MenuItem({
            label: 'Device',
            submenu: devicemenu
        }));

        // Assign it to `window.menu` to get the menu displayed
        nw.Window.get().menu = menu;
    }
}