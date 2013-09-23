Ext.define('ORAEXT.view.Connect.ConnectButton', {
    extend: 'Ext.button.Split',
    alias: 'widget.connectbutton',
    text: 'Connect',
    icon: 'res/img/computer_key.png',
    iconAlign: 'top',
    scale: 'large',
    arrowAlign:'bottom',
    menu: {
        xtype: 'connectmenu'
    }
});


if(ORAEXT.Config.debug) console.log('view ConnectButton.js loaded');