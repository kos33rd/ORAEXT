Ext.define('ORAEXT.controller.MainWindow', {
    extend: 'Ext.app.Controller',
    models: [
        'Connect'
    ],
    views: [
        'ConnectionsList',
        'DetailsTabPanel',
        'Connect.ConnectButton',
        'Connect.ConnectMenu',
        'ToolsPanel'
    ],
    stores: [
        'Connect'
    ],
    init: function (self, component, index, eOpts) {
        console.log('MainWindow init');
    }
});






if(ORAEXT.Config.debug) console.log('controller mainWindow.js loaded');