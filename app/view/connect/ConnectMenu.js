Ext.define('ORAEXT.view.Connect.ConnectMenu', {
    //extend: 'Ext.ux.menu.DynamicMenu',
    extend: 'Ext.menu.Menu',
    alias: 'widget.connectmenu',
    //sstores: ['Connect'],
    items: ['test'],
    beforeShow: function(m, opts){
    	this.callOverridden();
    	if(ORAEXT.Config.debug) console.log('Start filling connect menu items');
    	menu = this;
    	menu.removeAll();
		Ext.getStore('Connect').data.each(function() {
			menu.add({text:this.data['name'], id:this.data['id']});
		});
    }
});


if(ORAEXT.Config.debug) console.log('view ConnectMenu.js loaded');