/*
	Main ORAEXT configuration script

*/

Ext.define('ORAEXT.Config', {
    singleton : true,
    config : {

    	/* 
    	User settings storage configuration. 
    	User settings such as connections list or active queries could be stored at user browser (local storage) or could be saved to server.
    	By default storage is detecting automatically based on your browser type and version ('auto' option)
		userSettingsProxyType: ['auto' | 'localStorage' | 'remoteStorage' | 'memoryStorage']
		*/
    	userSettingsProxyType: 'auto',


        /*
        Debug flag.
        Enables console output and verbal mode in some cases
        */
        debug: true
    }
});




Ext.define('ORAEXT.Proxy.UserSettingsProxy', {
	extend: 'Ext.data.proxy.Proxy',
	alias: 'widget.userSettingsProxy',
	type: (ORAEXT.Config.userSettingsProxyType == 'auto')?((typeof(Storage)!=="undefined")?'localstorage':'remoteStorage'):ORAEXT.Config.userSettingsProxyType,
});



if(ORAEXT.Config.debug) if(typeof(Storage)!=="undefined")console.log('Your browser is supporting localStorage');


Ext.define("Ext.ux.menu.DynamicMenu", {
    extend: "Ext.menu.Menu",
    alias: 'widget.dynamicmenu',
    loaded: false,
    loadMsg: 'Loading...',
    store: undefined,
    DisplayName: undefined,
    icon: '',
    constructor: function (config) {
        var me = this;
        Ext.apply(me, config);

        me.callParent();
    },
    initComponent: function () {
        var me = this;
        me.callParent(arguments);
        me.on('show', me.onMenuLoad, me);
        listeners = {
            scope: me,
            load: me.onLoad,
            beforeload: me.onBeforeLoad
        };
        me.mon(me.store, listeners);
    },
    onMenuLoad: function () { var me = this; if (!me.store.loaded) me.store.load(); },
    onBeforeLoad: function (store) { this.updateMenuItems(false); },
    onLoad: function (store, records) { this.updateMenuItems(true, records); },
    updateMenuItems: function (loadedState, records) {
        var me = this;
        me.removeAll();
        if (loadedState) {
            me.setLoading(false, false);
            Ext.Array.each(records, function (record, index, array) {
                me.add({
                    text: record.get(me.DisplayName),
                    data: record,
                    icon: me.icon
                });

            });
            me.store.loaded = true;
        }
        else {
            me.add({ width: 75, height: 40 });
            me.setLoading(me.loadMsg, false);
        }
        me.loaded = loadedState;
    }
});